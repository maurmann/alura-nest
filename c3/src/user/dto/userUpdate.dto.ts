/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { IsEmailUnique } from "../validator/isEmailAlreadyUsed.validator";

export class UserUpdateDto {
    @IsOptional()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail(undefined, { message: 'The e-mail is not valid. ' })
    @IsEmailUnique({ message: 'the email is already in use' })
    email: string;

    @IsOptional()
    @MinLength(6, { message: 'Pssword should have more than 6 characters' })
    password: string;
}