import { Test, TestingModule } from '@nestjs/testing';
import { LancamentosController } from './lancamentos.controller';
import { LancamentosService } from '../adapters/application/lancamentos.service';
import { SaveLancamentoUCService } from '../adapters/application/in/save-lancamento-uc.service'
import { ILancamentoService } from '../ports/in/lancamento.interface';
import { ISaveLancamentoUseCase } from '../ports/in/save-lancamento-uc.interface';
import { Controller } from '@nestjs/common';
import { LancamentoTypeormRepository } from '../adapters/infra.database/lancamento-typeorm.repository';
import { ILancamentRepositoryInterface } from '../ports/out/lancament.repository.interface';


describe('LancamentosController', () => {
  let controller: LancamentosController;
  let lancamentoService: ILancamentoService;
  let saveLancamentoUseCase: ISaveLancamentoUseCase;

  const mockService: ILancamentoService = {
    addEntity: jest.fn(),
    getEntity: jest.fn(),
    getEntityByNameAndDateToPay: jest.fn(),
    getLancamentosByMonthAndYear: jest.fn(),
    removeEntity: jest.fn(),
    setRepository: jest.fn(),
    updateEntity: jest.fn()
  }

  const mockRepo: ILancamentRepositoryInterface = {
    
  } as any


  const mockUc: ISaveLancamentoUseCase = {
    save: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LancamentosController],
      providers: [
        LancamentosService,
        {
          provide: 'ILancamentoService',
          useExisting: mockService
        },
        {
          provide: 'ILancamentRepositoryInterface',
          useExisting: LancamentoTypeormRepository
        },
        {
          provide: 'ISaveLancamentoUseCase',
          useExisting: mockUc
        },
        SaveLancamentoUCService],
    })
      //.overrideProvider(LancamentosService).useValue(mockService)
      //.overrideProvider(SaveLancamentoUCService).useValue(mockUc)
      .compile();


    lancamentoService = module.get<LancamentosService>(LancamentosService);
    saveLancamentoUseCase = module.get<SaveLancamentoUCService>(SaveLancamentoUCService);
    controller = module.get<LancamentosController>(LancamentosController);
    //controller = new LancamentosController(lancamentoService, saveLancamentoUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
