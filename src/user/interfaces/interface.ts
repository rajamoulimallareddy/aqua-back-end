import { UserReport } from "src/typeorm/entities/UserReport";
import { UpdateUserDetails, UserDetails } from "src/utils/types";

export interface IUserService {
    createUser(details: UserDetails): Promise<UserReport>;
    findUser(discordId: string): Promise<UserReport | undefined>;
    users(): Promise<any[]>;
    // deleteUser(): Promise<any>;
    updateUser(user: UserReport, details: UpdateUserDetails): Promise<UserReport>;
}