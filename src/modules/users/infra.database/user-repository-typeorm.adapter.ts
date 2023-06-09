import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { IUserRepository } from "../domain/adapters/users-repository.interface";
import { User } from "src/modules/infra/typeorm/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserGatewayTypeOrmAdapter implements IUserRepository {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>) {
    }

    async addUser(userDto: CreateUserDto): Promise<{ id: number }> {
        const ret = await this.usersRepository.insert(userDto)
        return { id: ret.identifiers[0].id };
    }

    getUser(id: number): Promise<CreateUserDto> {
        throw new Error("Method not implemented.");
    }

}