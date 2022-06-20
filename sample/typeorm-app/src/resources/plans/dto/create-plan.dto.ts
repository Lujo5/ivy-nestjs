import { InputType } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, IsOptional, MaxLength, ValidateNested } from 'class-validator';
import { PersistFeatureDto } from '@resources/features/dto';

@InputType()
export class CreatePlanDto {
  @Expose()
  @IsNotEmpty()
  @MaxLength(255)
  readonly name: string;

  @Expose()
  @IsOptional()
  @IsInt()
  readonly projectId?: number;

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PersistFeatureDto)
  readonly features?: PersistFeatureDto[];
}