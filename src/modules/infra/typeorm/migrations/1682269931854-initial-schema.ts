import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class InitialSchema1682269931854 implements MigrationInterface {

    public userTable: Table = new Table({
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                isNullable: false
            },
            { name: 'name', type: 'varchar', isNullable: false }
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.userTable);
    }

}
