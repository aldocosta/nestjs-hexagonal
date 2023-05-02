import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserGatewayTypeOrmAdapter } from './infra.database/user-repository-typeorm.adapter';
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
