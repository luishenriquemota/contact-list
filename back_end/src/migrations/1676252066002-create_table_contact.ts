import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableContact1676252066002 implements MigrationInterface {
    name = 'createTableContact1676252066002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "telephone" character varying NOT NULL, CONSTRAINT "UQ_0395331c0e4781af12b8160d9db" UNIQUE ("cpf"), CONSTRAINT "UQ_1e0e630a17f7505a29a76b9af7f" UNIQUE ("telephone"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
