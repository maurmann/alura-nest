/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { ListUserDto } from './dto/listUser.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';

@Controller('/users')
export class UserController {

    //private userRepository: UserRepository = new UserRepository();

    constructor(private userRepository: UserRepository) { }


    @Post()
    async createUser(@Body() userData: CreateUserDto) {

        const newId = await this.userRepository.create(userData);

        return {
            message: "user created",
            id: newId
        };
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto) {
        const userUpdated = await this.userRepository.update(id, userUpdateDto);
        return userUpdated;
    }

    @Get()
    async getUsers() {
        const userList = await this.userRepository.getAll();
        const listUserDto = userList.map(user => new ListUserDto(user.id, user.name));
        return listUserDto;
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        const deletedUser = await this.userRepository.deleteUser(id);
        return deletedUser;
    }

}
