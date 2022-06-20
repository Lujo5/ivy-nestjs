import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ResourceEntity } from 'ivy-nestjs/resource';
import { Project } from '@resources/projects/entity';
import { Feature } from '@resources/features/entity';

@ObjectType()
@Entity()
export class Plan extends ResourceEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Project, (project) => project.plan)
  project?: Project;

  @OneToMany(() => Feature, (feature) => feature.plan, { cascade: true, eager: true })
  features?: Feature[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}