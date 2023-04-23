import { CreateUserDto } from "../dto/create-user.dto";

export interface IUserRepository {
    addUser(userDto: CreateUserDto): Promise<CreateUserDto>;
    getUser(id: number): Promise<CreateUserDto>;
}