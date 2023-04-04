import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { entities } from './typeorm';
import { PassportModule } from '@nestjs/passport';
import { DataSource } from 'typeorm';
import { databaseOptions } from './index';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    PassportModule.register({ session: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.PSQL_DB_HOST,
      port: 5432,
      username: process.env.PSQL_DB_USERNAME,
      password: process.env.PSQL_DB_PASSWORD,
      database: process.env.PSQL_DB_DATABASE,
      synchronize: true,
      entities: entities,
    }),
    AuthModule, 
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }

  getDataSource() {
    return this.dataSource;
  }
}