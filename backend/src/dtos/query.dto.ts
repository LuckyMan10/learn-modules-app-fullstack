import {IsString, IsNotEmpty } from 'class-validator';

export class queryDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}