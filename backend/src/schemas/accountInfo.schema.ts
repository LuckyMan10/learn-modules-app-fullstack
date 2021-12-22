import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountInfoDocument = AccountInfo & Document;

@Schema()
export class AccountInfo {
    @Prop({required: true})
    regData: string;

    @Prop({required: true})
    successfulTests: number

    @Prop({required: true})
    failedTests: number

    @Prop({required: true})
    email: string

    @Prop({required: true})
    username: string

    @Prop({required: true})
    userId: string
}

export const AccountInfoSchema = SchemaFactory.createForClass(AccountInfo)
