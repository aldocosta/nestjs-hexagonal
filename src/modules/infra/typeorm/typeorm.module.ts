import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './typeorm.config';
import { User } from './entities/user.entity';


@Module({
  imports:
    [
      TypeOrmModule.forRoot(OrmConfig),
    ],
  providers: [],
  exports: []
})
export class SqlDbModule { }
