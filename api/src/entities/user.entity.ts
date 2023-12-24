import { encodeString } from '@/core/helpers/hash.helper';
import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import BaseEntity from '../core/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ length: 255, nullable: true })
  firstName: string;

  @Column({ length: 255, nullable: true })
  lastName: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 255, unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashInsertedPassword() {
    this.password = encodeString(this.password);
  }
}
