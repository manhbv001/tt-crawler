import { JwtAuthGuard } from '@/core/guards/jwt-auth.guard';
import { LocalAuthGuard } from '@/core/guards/local-auth.guard';
import { AuthUser } from '@/decorators/user.decorator';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Đăng nhập' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Req() req: Request, @Body() _: LoginDto) {
    return await this.service.login({
      id: (req.user as any).id,
      username: (req.user as any).username,
    });
  }

  @Post('register')
  @ApiOperation({ summary: 'Đăng ký' })
  async register(@Body() payload: CreateUserDto) {
    return this.service.register(payload);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Lấy thông tin tài khoản' })
  @Get('me')
  async profile(@AuthUser('id') userId: number) {
    return this.service.getUserInfo(userId);
  }
}
