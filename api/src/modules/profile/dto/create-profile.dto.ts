import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  url: string;

  @IsString()
  tiktokId: string;
}
