import { Test, TestingModule } from '@nestjs/testing';
import { SaveLancamentoUCService } from './save-lancamento-uc.service';
import { CreateLancamentoDto } from 'src/modules/lancamentos/dto/create-lancamento.dto';

describe('save-lancamento-uc.service.ts', () => {
    let service: SaveLancamentoUCService

    const mockService = {
        save: jest.fn(),
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SaveLancamentoUCService],
        }).overrideProvider(SaveLancamentoUCService).useValue(mockService).compile();

        service = module.get<SaveLancamentoUCService>(SaveLancamentoUCService);
    });

    afterEach(async () => {
        jest.clearAllMocks()
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a Lancamento', async () => {
        let lancamento: CreateLancamentoDto = {
            "name": "Cartao PJ",
            "value": 1350,
            "dateToPay": new Date(new Date("2023-05-15").setHours(+24)),
            "status": false,
            "direction": "out",
            "id": 1
        }
        jest.spyOn(service, 'save').mockImplementation(async () => lancamento)

        const lanc = await service.save(lancamento)

        expect(lanc).toEqual(lancamento);
    })

    // it('should create an error', async () => {
    //     let lancamento: CreateLancamentoDto =  {
    //         "name": "Cartao PJ",
    //         "value": 1350,
    //         "dateToPay": new Date(new Date("2023-05-15").setHours(+24)),
    //         "status": false,
    //         "direction": "out",
    //         "id": 1
    //     }

        

    //     const lanc = await service.save(lancamento)

    //     expect(lanc).toEqual(lancamento);

    // })

});