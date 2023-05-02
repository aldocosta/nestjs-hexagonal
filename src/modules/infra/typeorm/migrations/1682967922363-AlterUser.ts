import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterUser1682967922363 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {

        const alterTable = 'alter table user ' +
            "add column ( email nvarchar(250), password nvarchar(15));"
        await queryRunner.query(alterTable)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const alterTable = 'alter table user ' +
            'drop column email, drop column password;'
        await queryRunner.query(alterTable)
    }

}
