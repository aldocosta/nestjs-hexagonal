import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Lancamentos1682988224506 implements MigrationInterface {

    public lancamentoTable: Table = new Table({
        name: 'lancamento',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                isNullable: false
            },
            { name: 'name', type: 'varchar', isNullable: false },
            { name: 'value', type: 'decimal', precision: 10, scale: 2 },
            { name: 'dateToPay', type: 'Date'  },
            { name: 'status', type: 'boolean'},
            { name: 'direction', type: 'varchar'}
        ],
    });


    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(this.lancamentoTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.lancamentoTable)
    }

}
