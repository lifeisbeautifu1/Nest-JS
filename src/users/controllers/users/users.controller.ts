import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get('/:fullName')
  @UseInterceptors(ClassSerializerInterceptor)
  getUsersByFullName(@Param('fullName') fullName: string) {
    const user = this.usersService.getUserByFullName(fullName);
    if (user) return new SerializedUser(user);
    else
      throw new HttpException(
        `User with fullname ${fullName} not found.`,
        HttpStatus.BAD_REQUEST,
      );
  }
}
