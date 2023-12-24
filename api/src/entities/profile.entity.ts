import { Column, Entity, OneToMany } from 'typeorm';
import BaseEntity from '../core/base.entity';
import { Video } from './video.entity';

@Entity('profile')
export class Profile extends BaseEntity {
  @Column({ nullable: true })
  url: string;

  @Column({ length: 255, nullable: true })
  tiktokId: string;

  @Column({ default: false })
  isCrawled: boolean;

  @OneToMany(() => Video, (link) => link.profileId)
  videos: Video[];
}
