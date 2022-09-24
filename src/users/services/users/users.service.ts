import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      fullName: 'harry',
      password: 'harry',
    },
    {
      fullName: 'bob',
      password: 'bob',
    },
    {
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
}