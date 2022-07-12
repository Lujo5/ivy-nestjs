import { InputType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';
import { PartialType } from 'ivy-nestjs/resource';
import { {{createDtoName}} } from './create-{{resourceFileName}}.dto';

@InputType()
export class {{persistDtoName}} extends PartialType({{createDtoName}}) {
  @Expose()
  @IsString()
  @IsOptional()
  readonly id?: string;
}
