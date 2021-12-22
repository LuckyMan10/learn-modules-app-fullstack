import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Module} from './module.schema';

export type ArchiveSchemaDocument = Archive & Document;

@Schema()
export class Archive {
    @Prop({required: true})
    userId: string;

    @Prop({ type: [{ type: Object, ref: 'Module' }] })
    modules: Module[];
}

export const ArchiveSchema = SchemaFactory.createForClass(Archive);
