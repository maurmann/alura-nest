/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { ListUserDto } from "./dto/listUser.dto";
import { CreateUserDto } from "./dto/createUser.dto";
import { v4 as uuid } from "uuid";
import { UserUpdateDto } from './dto/userUpdate.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }

    async getAll() {
        console.log('from service');
        const users = await this.userRepository.find();
        const list = users.map(
            (u) => new ListUserDto(u.id, u.name)
        )
        return list;
    }

    async getById(id: string) {
        const user = await this.userRepository.find({ where: { id: id } });
        return user;
    }

    async create(userDto: CreateUserDto) {
        const newId = uuid();
        const user = new User(newId, userDto.name, userDto.email, userDto.password);
        await this.userRepository.save(user);
    }

    async update(id: string, userData: UserUpdateDto) {
        await this.userRepository.update(id, userData);
    }

    async delete(id: string) {
        await this.userRepository.delete(id);
    }
}


