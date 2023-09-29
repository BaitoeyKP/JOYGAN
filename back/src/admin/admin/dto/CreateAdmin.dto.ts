import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateAdminDto {
    @IsNotEmpty()
    @MinLength(3)
    admin_username: string;

    @IsNotEmpty()
    @MinLength(8)
    admin_password: string;

    @IsNotEmpty()
    @MinLength(3)
    expire: number;

    @IsNotEmpty()
    @MinLength(3)
    code: string;

    @IsNotEmpty()
    @MinLength(3)
    displayname: string;

    @IsNotEmpty()
    @MinLength(3)
    tel: string;

    @IsNotEmpty()
    @MinLength(3)
    mode: boolean;


    /*@IsNotEmpty()
    @IsEmail()
    email: string; */
}