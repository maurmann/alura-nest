/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { IsEmailAlreadyUsed } from "./validator/isEmailAlreadyUsed.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, IsEmailAlreadyUsed]
})

export class UserModule { } 