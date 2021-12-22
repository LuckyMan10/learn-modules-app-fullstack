import {IsString, IsNotEmpty, Allow } from 'class-validator';

export class cardDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    termin: string;

    @IsString()
    @IsNotEmpty()
    id: string;

    @Allow()
    image?: string;
}