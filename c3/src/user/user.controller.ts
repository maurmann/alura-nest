/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {

    //private userRepository: UserRepository = new UserRepository();

    constructor(private userRepository: UserRepository,
        private userService: UserService) { }


    @Post()
    async createUser(@Body() userData: CreateUserDto) {


        await this.userService.create(userData);

        /*
        const newId = await this.userRepository.create(userData);

        return {
            message: "user created",
            id: newId
        };
        */
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() userData: UserUpdateDto) {
        //const userUpdated = await this.userRepository.update(id, userUpdateDto);
        //return userUpdated;

        this.userService.update(id, userData);

        return undefined;
    }

    @Get()
    async getUsers() {
        const users = await this.userService.getAll();
        return users;
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id) {
        await this.userService.delete(id);
    }

}
