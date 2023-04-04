import { UserReport } from 'src/typeorm/entities/UserReport';
import { UserDetails } from 'src/utils/types';

export interface IAuthService {
    validateUser(details: UserDetails): Promise<UserReport>;
}