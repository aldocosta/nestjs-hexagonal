import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../domain/adapters/users-repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';


@Injectable()
export class UsersService {  

  constructor(
  @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {
}

 async create(createUserDto: CreateUserDto): Promise<{ id: number }> {    
    return await this.userRepository.addUser(createUserDto);
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
