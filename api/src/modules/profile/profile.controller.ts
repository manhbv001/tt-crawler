import { JwtAuthGuard } from '@/core/guards/jwt-auth.guard';
import { AuthUser } from '@/decorators/user.decorator';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() payload: CreateProfileDto, @AuthUser('id') userId: number) {
    return this.profileService.create(payload, userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  get() {
    return this.profileService.findAll();
  }
}
