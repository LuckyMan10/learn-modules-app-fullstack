import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    termin: string;

    @Prop({required: true})
    id: string;

    @Prop()
    image?: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);