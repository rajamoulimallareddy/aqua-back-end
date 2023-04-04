import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import { TypeormStore } from 'connect-typeorm/out';
import { Session } from './typeorm/entities/Session';
import { dataSource } from 'src';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  // const SessionRepository = app
  //   .get(AppModule)
  //   .getDataSource()
  //   .getRepository(Session);
  const sessionStore = new TypeormStore({
    cleanupLimit: 2,
    limitSubquery: false, // If using MariaDB.
    ttl: 86400,
  })
  dataSource.initialize()

  const sessionRepository = dataSource.getRepository(Session);
  app.use(
    session({
      secret: 'bfhebfibgfherbgherkhgberigb', // This should not be hardcoded, an .env variable is preferred.
      resave: false,
      saveUninitialized: false,
      store: sessionStore.connect(sessionRepository),
    })
  );

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true
  });
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(process.env.PORT);
    console.log(`Application is running on port : ${process.env.PORT}`);
  } catch (e) {
    console.log(e);
  };
}
bootstrap();
