import {PayloadUser} from './userPayload.interface';

export type UserData = {
    accessToken: string;
    refreshToken: string;
    user: PayloadUser;
}