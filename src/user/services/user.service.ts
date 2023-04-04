import { BadRequestException, Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserReport } from 'src/typeorm/entities/UserReport';
import { Repository } from 'typeorm';
import { UpdateUserDetails, UserDetails } from 'src/utils/types';
@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(UserReport) private readonly userReportRepository: Repository<UserReport>
    ) { }

    async users(): Promise<any> {
        // return await this.prisma.userReport.findMany({});
    }

    createUser(details: UserDetails) {
        console.log('Create User');
        const newUser = this.userReportRepository.create(details);
        return this.userReportRepository.save(newUser);
    }
    findUser(discordId: string) {
        console.log('Find User');
        return this.userReportRepository.findOne({ where: { discordId } });
    }

    updateUser(user: UserReport, details: UpdateUserDetails) {
        console.log('Update User');
        return this.userReportRepository.save({
            ...user,
            ...details,
        });
    }
}

export interface VerifyUserPayload {
    type: string;
}
