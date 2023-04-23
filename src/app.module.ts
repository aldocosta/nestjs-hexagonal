import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlDbModule } from './modules/infra/typeorm/typeorm.module';

@Module({
  imports: [
    UsersModule,
    SqlDbModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
