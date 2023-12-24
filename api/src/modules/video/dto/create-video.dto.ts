import { IsNumber, IsString } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  url: string;

  @IsNumber()
  profileId: number;
}
