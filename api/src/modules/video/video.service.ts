import { Video } from '@/entities/video.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) {}

  create(payload: CreateVideoDto): Promise<Video> {
    const newVideo = new Video();

    newVideo.profileId = payload.profileId;
    newVideo.url = payload.url;

    return this.videoRepository.save(newVideo);
  }

  findOne(payload: FindOptionsWhere<Video>): Promise<Video | null> {
    return this.videoRepository.findOne({
      where: { ...payload, deletedAt: null },
    });
  }

  findAll(): Promise<Video[]> {
    return this.videoRepository.find();
  }
}
