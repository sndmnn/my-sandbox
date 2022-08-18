import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateProductsTable1660777188199 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }),
          {
            name: 'name',
            type: 'varchar',
            length: '1000',
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 8,
            scale: 2,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
