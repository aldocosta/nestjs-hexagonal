import { Module } from '@nestjs/common';
import { LancamentosController } from './controllers/lancamentos.controller';
import { LancamentosService } from './services/lancamentos.service';

@Module({
  controllers: [LancamentosController],
  providers: [LancamentosService]
})
export class LancamentosModule {}
