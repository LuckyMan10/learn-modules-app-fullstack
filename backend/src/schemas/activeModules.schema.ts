import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Module} from './module.schema';

export type ActiveModulesDocument = ActiveModules & Document;

@Schema()
export class ActiveModules {
    @Prop({required: true})
    userId: string;

    @Prop({ type: [{ type: Object, ref: 'Module' }] })
    modules: Module[];
}

export const ActiveModulesSchema = SchemaFactory.createForClass(ActiveModules);
