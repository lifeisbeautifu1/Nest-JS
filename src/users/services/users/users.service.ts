import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [];
  getUsers() {
    return this.users.map((user) => plainToInstance(SerializedUser, user));
  }
  getUserByFullName(fullName: string) {
    return this.users.find((user) => user.fullName === fullName);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }
  findUserByUsername(username: string) {
    const user = this.userRepository.findOne({ where: { username } });
    return user;
  }
  findUserById(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
