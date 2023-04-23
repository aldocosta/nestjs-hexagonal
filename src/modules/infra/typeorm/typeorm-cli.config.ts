import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { InitialSchema1682269931854 } from "./migrations/1682269931854-initial-schema";

export default new DataSource({
    type: 'mysql',
    host: '172.17.0.3',
    port: 3306,
    username: 'root',
    password: 'my-secret-pw',
    database: 'Gastos',
    entities: [User],  
    migrations:[InitialSchema1682269931854]
})