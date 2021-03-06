import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth.service';
import { AuthUser } from '../../interfaces/auth-user';
import { AuthorizationError } from '../../errors';
import { AuthSource } from '../../../enums';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<AuthUser> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new AuthorizationError('Invalid credentials');
    }
    if (user.authSource !== AuthSource.Local) {
      throw new AuthorizationError('User account is not from local source', 403);
    }
    return user;
  }
}
