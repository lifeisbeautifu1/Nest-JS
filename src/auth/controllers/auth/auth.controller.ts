import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Session,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {}

  @Get('/')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    session.authenticated = true;
    return session;
  }
}
