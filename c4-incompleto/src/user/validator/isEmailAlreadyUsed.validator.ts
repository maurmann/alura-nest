/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from '../user.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailAlreadyUsed implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const emailAlreadyUsed = await this.userRepository.isEmailAlreadyUsed(value);
        return !emailAlreadyUsed;
    }
}

export const IsEmailUnique = (validationOptions: ValidationOptions) => {

    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: IsEmailAlreadyUsed
        })
    }

}