import { JwtAuthGuard } from '@/core/guards/jwt-auth.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() payload: CreateVideoDto) {
    return this.videoService.create(payload);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  get() {
    return this.videoService.findAll();
  }
}
