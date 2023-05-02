import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SqlDbModule } from './modules/infra/typeorm/typeorm.module';
import { LancamentosModule } from './modules/lancamentos/lancamentos.module';

@Module({
  imports: [
    UsersModule,
    SqlDbModule,
    LancamentosModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
