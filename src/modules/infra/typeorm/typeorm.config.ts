
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

export const OrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '172.17.0.3',
  port: 3306,
  username: 'root',
  password: 'my-secret-pw',
  database: 'Gastos',
  autoLoadEntities:true,
  //entities: [User],  
};