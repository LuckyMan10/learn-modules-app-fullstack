import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Card } from './card.schema';

export type ModuleDocument = Module & Document;

@Schema()
export class Module {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    id: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }] })
    cards: Card[];
}

export const ModuleSchema = SchemaFactory.createForClass(Module);