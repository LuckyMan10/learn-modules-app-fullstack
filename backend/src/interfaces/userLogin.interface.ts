import { PayloadUser } from './userPayload.interface';

export type UserLogin = Omit<PayloadUser, 'username' | 'id'>;
