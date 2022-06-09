import * as bcrypt from 'bcrypt';
import { Document, Model } from 'mongoose';
import { AuthUser, UserDetailsService } from '../interfaces';
import { AuthSource, Role } from '../../enums';
import { MongoResourceService } from '../../resource';
import { FileManager } from '../../storage';

export abstract class MongoUserDetailsService<T extends AuthUser, C, U>
  extends MongoResourceService<T>
  implements UserDetailsService<T>
{
  protected constructor(protected model: Model<T & Document>, protected fileManager?: FileManager) {
    super(model, fileManager);
  }

  async create(createDto: C): Promise<T> {
    const passwordHash = await this.hashPassword(createDto['password']);
    return super.create({ ...createDto, passwordHash });
  }

  async update(id: string, updateDto: U, isFileUpload?: boolean): Promise<T> {
    if (updateDto['password']) {
      updateDto['passwordHash'] = await this.hashPassword(updateDto['password']);
      updateDto['logoutAt'] = new Date();
      delete updateDto['password'];
    }
    return super.update(id, updateDto, isFileUpload);
  }

  async findByUsername(username: string): Promise<T> {
    let resp = await this.query({ filter: { email: username } });
    return resp.resultCount > 0 ? resp.items[0] : null;
  }

  async onLogin(user: T): Promise<boolean> {
    return !!(await super.update(user.getId(), { loginAt: new Date() }));
  }

  async onLogout(user: T): Promise<boolean> {
    return !!(await super.update(user.getId(), { logoutAt: new Date() }));
  }

  async checkPassword(password: string, passwordHash: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }

  async hashPassword(password: string): Promise<string> {
    if (!password) {
      return undefined;
    }
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async register(userData: C, source: AuthSource = AuthSource.Local): Promise<T> {
    userData['authSource'] = source;
    userData['roles'] = [Role.User];
    return await this.create(userData);
  }

  async identifierAvailable(field: string, value: any): Promise<boolean> {
    const filter = { [field]: value } as any;
    const resp = await this.query({ filter });
    return resp.resultCount === 0;
  }
}