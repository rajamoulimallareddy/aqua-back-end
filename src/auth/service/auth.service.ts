import { Injectable, Inject, Get, UseGuards } from '@nestjs/common';
import { IUserService } from 'src/user/interfaces/interface';
import { SERVICES } from 'src/utils/constants';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class AuthService implements IAuthService {
    constructor(@Inject(SERVICES.USER) private readonly userService: IUserService) {
    }

    async validateUser(details: UserDetails) {
        const user = await this.userService.findUser(details.discordId);
        const { discordId, ...updatedDetails } = details;

        const data = user
            ? await this.userService.updateUser(user, updatedDetails)
            : await this.userService.createUser(details)
        console.log(data);
        return data;
    }
}
