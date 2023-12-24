import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ description: 'mật khẩu' })
  password: string;

  @IsString()
  @ApiProperty({ description: 'username' })
  username: string;
}
