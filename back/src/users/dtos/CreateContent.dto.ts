import { IsNotEmpty, MinLength } from "class-validator";
import { UUID } from "crypto";

export class CreateContentDto {
    @IsNotEmpty()
    @MinLength(3)
    text: string;

    @IsNotEmpty()
    time_display: number;
     
    @IsNotEmpty()
    donate: number;

   // @IsNotEmpty()
    time_stamp: number;

    @IsNotEmpty()
    @MinLength(6)
    pic: string; 

   /* @IsNotEmpty()
    @MinLength(5)
    state: string; 

    @IsNotEmpty()
    @MinLength(1)
    adminId: UUID; 

    @IsNotEmpty()
    @MinLength(1)
    userId: number;
    */
}