import { Module } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReport } from 'src/typeorm/entities/UserReport';

@Module({
    imports: [TypeOrmModule.forFeature([UserReport])],
    providers: [{
        provide: SERVICES.USER,
        useClass: UserService,
    }],
    exports: [{
        provide: SERVICES.USER,
        useClass: UserService,
    }],
})
export class UserModule { }