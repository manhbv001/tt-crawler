import { Video } from '@/entities/video.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  controllers: [VideoController],
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [VideoService],
  exports: [VideoService],
})
export class VideoModule {}
