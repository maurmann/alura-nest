/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CreateUserDto } from './dto/createUser.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class UserRepository {
    private users: User[] = [];

    async create(userDto: CreateUserDto): Promise<string> {

        const newId = uuid();
        const user = new User(newId, userDto.name, userDto.email, userDto.password);
        this.users.push(user);

        return newId;
    }

    // Partial indica que apenas parte das propriedades do objeto podem ser recebidas

    /*
    async update(id: string, user: Partial<User>) {

        const userToUpdate = await this.getById(id);

        // Esta considerando que nem todas as propriedades poderao ser enviadas.
        // Entao decompoe o objeto e pega as chaves recebidas 

        Object.entries(user).forEach(([key, value]) => {

            // id nao deve ser atualizado
            if (key === 'id') { return; }

            userToUpdate[key] = value;

        });

        return userToUpdate;


    }
    */

    async getAll(): Promise<User[]> {
        return this.users;
    }

    /*
    async getById(id: string): Promise<User> {
        const user = this.users.find(u => u.id === id);

        if (!user)
            throw new Error('user does not exist');

        return user;
    }
    */

    async isEmailAlreadyUsed(email: string) {
        const emailAlreadyUsed = this.users.find(u => u.email === email);
        return emailAlreadyUsed !== undefined;
    }

    /*
    async deleteUser(id: string) {

        const user = this.getById(id);
        this.users = this.users.filter(savedUser => savedUser.id !== id);
        return user;

    }*/

}