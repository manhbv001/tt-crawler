import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;

    return this.userRepository.save(newUser);
  }

  findOne(payload: FindOptionsWhere<User>): Promise<User | null> {
    return this.userRepository.findOne({
      where: { ...payload, deletedAt: null },
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({});
  }
}
