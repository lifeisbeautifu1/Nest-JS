import { Controller, Post, UseGuards, Get, Session, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {}

  @Get('/')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    session.authenticated = true;
    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/status')
  async getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
