import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddProductPicture1660792334976 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'product_picture_url',
        type: 'varchar',
        length: '2048',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'product_picture_url');
  }
}
