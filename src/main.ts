import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Session from 'express-session';
import * as Passport from 'passport';
import { DataSource, getRepository } from 'typeorm';
import { TypeormStore } from 'connect-typeorm/out';
import { SessionEntity } from './typeorm/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = app.get(DataSource).getRepository(SessionEntity);
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
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(Passport.initialize());
  app.use(Passport.session());
  await app.listen(5000);
}
bootstrap();
