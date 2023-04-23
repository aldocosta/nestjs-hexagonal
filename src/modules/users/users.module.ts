import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UserGatewayTypeOrmAdapter } from './gateways/user-repository-typeorm.adapter';
import { SqlDbModule } from '../infra/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../infra/typeorm/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [        
    UserGatewayTypeOrmAdapter,
    {
      provide: 'IUserRepository',
      useExisting: UserGatewayTypeOrmAdapter
    }
  ],
  exports: [TypeOrmModule]
})
export class UsersModule {}
