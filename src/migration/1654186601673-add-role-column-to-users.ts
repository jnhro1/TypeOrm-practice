import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addRoleColumnToUsers1654186601673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const usersTable = await queryRunner.getTable("users");
    const roleColumn = new TableColumn({ name: "role", type: "int" });
    await queryRunner.addColumn(usersTable!, roleColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const usersTable = await queryRunner.getTable("users");
    await queryRunner.dropColumn(usersTable!, "role");
  }
}
