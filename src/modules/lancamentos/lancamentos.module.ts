import { Module } from '@nestjs/common';
import { LancamentosController } from './controllers/lancamentos.controller';
import { LancamentosService } from './services/lancamentos.service';
import { LancamentoTypeormRepository } from './domains/infra.database/lancamento-typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamento } from '../infra/typeorm/entities/lancamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamento])],
  controllers: [LancamentosController],
  providers: [
    LancamentosService,
    LancamentoTypeormRepository,
    {
      provide: 'IRepository',
      useExisting: LancamentoTypeormRepository
    }
  ]
})
export class LancamentosModule {}
