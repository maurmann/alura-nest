/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { IsEmailAlreadyUsed } from "./validator/isEmailAlreadyUsed.validator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, UserRepository, IsEmailAlreadyUsed]
})

export class UserModule { } 