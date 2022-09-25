import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      fullName: 'harry',
      password: 'harry',
    },
    {
      id: 2,
      fullName: 'bob',
      password: 'bob',
    },
    {
      id: 3,
      fullName: 'john',
      password: 'john',
    },
  ];
  getUsers() {
    return this.users.map((user) => plainToInstance(SerializedUser, user));
  }
  getUserByFullName(fullName: string) {
    return this.users.find((user) => user.fullName === fullName);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
