import {
    IsString,
    IsNotEmpty,
    ValidateNested,
    ArrayMinSize,
    IsArray
} from 'class-validator';
import { Type } from 'class-transformer';
import { cardDto } from './card.dto';


export class moduleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested()
    @Type(() => cardDto)
    cards: cardDto[];
}