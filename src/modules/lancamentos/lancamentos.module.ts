import { Module } from '@nestjs/common';
import { LancamentosService } from './domain/adapters/application/lancamentos.service';
import { LancamentoTypeormRepository } from './domain/adapters/infra.database/lancamento-typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamento } from '../infra/typeorm/entities/lancamento.entity';
import { LancamentosController } from './domain/controllers/lancamentos.controller';
import { SaveLancamentoUCService } from './domain/adapters/application/in/save-lancamento-uc.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamento])],
  controllers: [LancamentosController],
  providers: [
    SaveLancamentoUCService,
    LancamentosService,
    LancamentoTypeormRepository,    
    {
      provide: 'ILancamentoService',
      useExisting: LancamentosService
    },
    {
      provide: 'ILancamentRepositoryInterface',
      useExisting: LancamentoTypeormRepository
    },
    {
      provide: 'ISaveLancamentoUseCase',
      useExisting: SaveLancamentoUCService
    }

  ]
})
export class LancamentosModule { }
