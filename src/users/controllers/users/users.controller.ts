import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get('fullname/:fullName')
  @UseInterceptors(ClassSerializerInterceptor)
  getUsersByFullName(@Param('fullName') fullName: string) {
    const user = this.usersService.getUserByFullName(fullName);
    if (user) return new SerializedUser(user);
    else
      throw new HttpException(
        `User with fullname ${fullName} not found.`,
        HttpStatus.NOT_FOUND,
      );
  }
  @Get('id/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }
}
