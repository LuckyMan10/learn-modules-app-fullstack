import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Module} from './module.schema';

export type DumpSchemaDocument = Dump & Document;

@Schema()
export class Dump {
    @Prop({required: true})
    userId: string;

    @Prop({ type: [{ type: Object, ref: 'Module' }] })
    modules: Module[];
}

export const DumpSchema = SchemaFactory.createForClass(Dump);
