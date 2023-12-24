import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from '../core/base.entity';
import { Profile } from './profile.entity';

@Entity('videos')
export class Video extends BaseEntity {
  @Column({ nullable: true })
  url: string;

  @ManyToOne(() => Profile, (profile) => profile.videos)
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Column({ nullable: true })
  profileId: number;

  @Column({ default: false })
  isDownloaded: boolean;
}
