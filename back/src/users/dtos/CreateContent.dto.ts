import { IsNotEmpty, MinLength } from "class-validator";
import { UUID } from "crypto";

export class CreateContentDto {
    @IsNotEmpty()
    @MinLength(3)
    text: string;

    @IsNotEmpty()
    @MinLength(2)
    time_display: number;
     
    @IsNotEmpty()
    @MinLength(1)
    donate: number;

    @IsNotEmpty()
    @MinLength(2)
    time_stamp: number;

    @IsNotEmpty()
    @MinLength(6)
    pic: string; 

    @IsNotEmpty()
    @MinLength(5)
    state: string; 

    @IsNotEmpty()
    @MinLength(1)
    adminId: UUID; 

    @IsNotEmpty()
    @MinLength(1)
    userId: number;

}