import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserRepositoryInMemoryAdapter } from './user-respository-inmemory.adapter';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserGatewayAdapter } from '../gateways/user-repository-typeorm.adapter';

describe('UsersService', () => {
  let service: UsersService;  

  beforeEach(async () => {
    service = new UsersService(new UserGatewayAdapter())
    /*const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);*/
  });

  afterEach(async () => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be a CreateUserDto Object', async () => {
    const user = new CreateUserDto({ Id: 1, Name: 'Aldo' });
    
    jest.spyOn(service, 'create').mockImplementation(async () => user)
    
    const userCreated = await service.create(new CreateUserDto({ Id: 1, Name: 'Aldo' }))    
    expect(userCreated).toEqual(user)

    expect(userCreated.id).toEqual(user.id)

  });
});
