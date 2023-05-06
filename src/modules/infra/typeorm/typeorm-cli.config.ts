import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { InitialSchema1682269931854 } from "./migrations/1682269931854-initial-schema";
import { AlterUser1682967922363 } from "./migrations/1682967922363-AlterUser";
import { Lancamentos1682988224506 } from "./migrations/1682988224506-lancamentos";
import { Lancamento } from "./entities/lancamento.entity";

export default new DataSource({
    type: 'mysql',
    host: '172.17.0.3',
    port: 3306,
    username: 'root',
    password: 'my-secret-pw',
    database: 'Gastos',
    entities: [
        User,
        Lancamento
    ],  
    migrations: [
        InitialSchema1682269931854,
        AlterUser1682967922363,
        Lancamentos1682988224506]
})