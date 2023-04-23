import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../gateways/users-repository.interface";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepositoryInMemoryAdapter implements IUserRepository {

    createUserDto: CreateUserDto[] = []
    constructor() {
    }

    async addUser(userDto: CreateUserDto): Promise<CreateUserDto> {
        userDto.id += 1
        this.createUserDto.push(userDto);
        return userDto
    }

    getUser(id: number): Promise<CreateUserDto> {
        throw new Error("Method not implemented.");
    }

}