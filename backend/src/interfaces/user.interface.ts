import { PayloadUser } from './userPayload.interface';

export type User = Omit<PayloadUser, 'id'>;
