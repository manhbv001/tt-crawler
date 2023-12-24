import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(6)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
