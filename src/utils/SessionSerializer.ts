import { PassportSerializer } from '@nestjs/passport'
import { Inject } from '@nestjs/common';
// import { UserReport } from '@prisma/client';
import { Done } from './types';
import { SERVICES } from 'src/utils/constants';
import { UserReport } from 'src/typeorm/entities/UserReport';
import { IUserService } from 'src/user/interfaces/interface';

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject(SERVICES.USER) private readonly userService: IUserService
    ) {
        super();
    }
    serializeUser(user: UserReport, done: Done) {
        done(null, user);
    }

    async deserializeUser(user: UserReport, done: Done) {
        const userdata = await this.userService.findUser(user.discordId);
        // console.log(userdata);
        try {
            return userdata ? done(null, userdata) : done(null, null);
        } catch (error) {
            done(error, null);
        }
    }
};