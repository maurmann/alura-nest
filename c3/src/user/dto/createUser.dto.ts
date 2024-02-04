/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { IsEmailUnique } from "../validator/isEmailAlreadyUsed.validator";

export class CreateUserDto {

    @IsNotEmpty({ message: 'name is mandatory' })
    name: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'The e-mail is not valid. ' })
    @IsEmailUnique({ message: 'the email is already in use' })
    email: string;

    @MinLength(6, { message: 'Pssword should have more than 6 characters' })
    password: string;
}