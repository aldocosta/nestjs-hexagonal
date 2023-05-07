import { Module } from '@nestjs/common';
import { LancamentosService } from './domain/adapters/services/lancamentos.service';
import { LancamentoTypeormRepository } from './domain/adapters/infra.database/lancamento-typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamento } from '../infra/typeorm/entities/lancamento.entity';
import { LancamentosController } from './domain/controllers/lancamentos.controller';
import { LancamentoInMemoryRepository } from './domain/adapters/infra.database/lancament-inmemory.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamento])],
  controllers: [LancamentosController],
  providers: [
    LancamentosService,
    LancamentoTypeormRepository,
    //LancamentoInMemoryRepository,
    {
      provide: 'ILancamentoService',
      useExisting: LancamentosService
    },    
    {
      provide: 'ILancamentRepositoryInterface',
      useExisting: LancamentoTypeormRepository
    }
    
  ]
})
export class LancamentosModule {}
