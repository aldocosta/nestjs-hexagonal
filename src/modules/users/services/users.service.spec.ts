import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserRepositoryInMemoryAdapter } from '../infra.database/user-respository-inmemory.adapter';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    service = new UsersService(new UserRepositoryInMemoryAdapter())
    // const mockService = {
    //   create: jest.fn()
    // }

    // const module: TestingModule = await Test.createTestingModule({
    //   providers: [UsersService],
    // }).overrideProvider(UsersService).useValue(mockService).compile();

    // service = module.get<UsersService>(UsersService);
  });

  afterEach(async () => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be a CreateUserDto Object', async () => {
    const user = new CreateUserDto({ id: 1, name: 'Aldo', 'email': 'a', password: '123' });

    jest.spyOn(service, 'create').mockImplementation(async () => user)

    const userCreated = await service.create(user)
    expect(userCreated).toEqual(expect.any(Number))

    expect(userCreated).toEqual(user.id)

  });
});
