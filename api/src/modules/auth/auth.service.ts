import { config } from '@/config';
import { decodeString } from '@/core/helpers/hash.helper';
import { User } from '@/entities/user.entity';
import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtAuthPayload } from './interfaces/jwt-auth.interface';

export class AuthService {
  constructor(
    @Inject(UserService) private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(username: string, password: string) {
    const user = await this.userService.findOne({ username });
    const plainPassword = user && decodeString(user.password);

    return plainPassword === password ? user : null;
  }

  public async login(
    payload: JwtAuthPayload,
  ): Promise<{ accessToken: string }> {
    const accessToken = this.jwtService.sign(payload, {
      secret: config.jwtSecretKey,
      expiresIn: config.jwtExpireIn,
    });

    return { accessToken };
  }

  public async register(payload: CreateUserDto): Promise<boolean> {
    const user = await this.userService.create(payload);

    return !!user;
  }

  public async getUserInfo(id: number): Promise<User | null> {
    const user = await this.userService.findOne({
      id: id,
    });

    return user;
  }
}
