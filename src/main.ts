import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Session from 'express-session';
import * as Passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    Session({
      name: 'NEXTJS_SESSION_ID',
      secret: 'The cake is a lie',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 1000,
      },
    }),
  );
  app.use(Passport.initialize());
  app.use(Passport.session());
  await app.listen(5000);
}
bootstrap();
