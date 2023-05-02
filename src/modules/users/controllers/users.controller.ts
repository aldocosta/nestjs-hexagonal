import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUserRepository } from '../domain/adapters/users-repository.interface';



@Controller('users')
export class UsersController {
  constructor(    
    @Inject('IUserRepository')
    private readonly usersService: IUserRepository
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.addUser(createUserDto)
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
