import { UserReport } from 'src/typeorm/entities/UserReport';


export type Done = (err: Error, user: UserReport) => void

export type UpdateUserDetails = {
    accessToken: string;
    refreshToken: string;
    username: string;
    discriminator: string;
};

export type UserDetails = {
    discordId: string;
    accessToken: string;
    refreshToken: string;
    username: string;
    discriminator: string;
}; 
