import { CreateUserDto } from "../../dto/create-user.dto";

export interface IUserRepository {
    addUser(userDto: CreateUserDto): Promise<{ id: number }>;
    getUser(id: number): Promise<CreateUserDto>;
}