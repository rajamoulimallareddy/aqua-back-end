import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';
import { SERVICES } from 'src/utils/constants';
import { DiscordStrategy } from 'src/utils/DiscordStrategy';
import { SessionSerializer } from 'src/utils/SessionSerializer';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    }]
})
export class AuthModule { }
