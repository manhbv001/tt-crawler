import { config } from '@/config';
import { User } from '@/entities/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtSecretKey,
    });
  }

  async validate(payload: User): Promise<User> {
    const user = await this.authService.getUserInfo(payload.id);
    if (!user) throw new UnauthorizedException('Không thể xác thực!');

    return user;
  }
}
