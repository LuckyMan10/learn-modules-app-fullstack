import { IsNotEmpty, IsNumber } from "class-validator";

export class updateUserInfoDto {
    @IsNumber()
    @IsNotEmpty()
    successfulTests: number;

    @IsNumber()
    @IsNotEmpty()
    failedTests: number;
}