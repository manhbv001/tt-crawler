import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export default class BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ default: 1 })
  public isActive: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @Column({ nullable: true })
  public createdBy: number;

  @Exclude()
  @UpdateDateColumn()
  public updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  public deletedAt: Date;
}
