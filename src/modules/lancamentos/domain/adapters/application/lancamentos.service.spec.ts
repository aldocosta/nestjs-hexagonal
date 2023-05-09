import { Test, TestingModule } from '@nestjs/testing';
import { LancamentosService } from './lancamentos.service';

describe('LancamentosService', () => {
  let service: LancamentosService;

  const mockService = {
    addEntity: jest.fn(),
    getEntity: jest.fn(),
    updateEntity: jest.fn(),
    removeEntity: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LancamentosService],
    }).overrideProvider(LancamentosService).useValue(mockService).compile();

    service = module.get<LancamentosService>(LancamentosService);
  });

  afterEach(async () => {
    jest.clearAllMocks()
  })

  it('should create an Lancamento Object', async () => {
    
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
