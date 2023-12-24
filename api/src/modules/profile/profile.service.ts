import { Profile } from '@/entities/profile.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  create(payload: CreateProfileDto, userId: number): Promise<Profile> {
    const newProfile = new Profile();

    newProfile.tiktokId = payload.tiktokId;
    newProfile.url = payload.url;
    newProfile.createdBy = userId;

    return this.profileRepository.save(newProfile);
  }

  findOne(payload: FindOptionsWhere<Profile>): Promise<Profile | null> {
    return this.profileRepository.findOne({
      where: { ...payload, deletedAt: null },
    });
  }

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }
}
