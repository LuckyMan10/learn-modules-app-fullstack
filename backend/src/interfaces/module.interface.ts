import { cardI } from "./card.interface";

export interface moduleI {
    name: string;
    description: string;
    id: string;
    cards: Array<cardI>;
    __id?: string;
    __v?: number;
}