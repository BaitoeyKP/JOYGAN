import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateAdminDto {
    @IsNotEmpty()
    @MinLength(3)
    admin_username: string;

    @IsNotEmpty()
    @MinLength(8)
    admin_password: string;

    /*@IsNotEmpty()
    @IsEmail()
    email: string; */
}