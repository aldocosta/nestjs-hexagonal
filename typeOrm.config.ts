
import { User } from "src/modules/infra/typeorm/entities/user.entity";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mysql',
  host: '172.17.0.3',
  port: 3306,
  username: 'root',
  password: 'my-secret-pw',
  database: 'Gastos',

  entities: [User],
});
