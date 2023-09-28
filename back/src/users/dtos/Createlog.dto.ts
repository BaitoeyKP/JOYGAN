import { IsNotEmpty, MinLength } from "class-validator";

export class CreateLogDto {
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @MinLength(2)
    amount: number;
        
    @IsNotEmpty()
    @MinLength(6)
    code: string; 
}