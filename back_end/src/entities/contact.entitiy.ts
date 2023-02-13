import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("contact")
export class Contact{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({nullable: false})
  first_name: string;

  @Column({nullable: false})
  last_name: string;

  @Column({unique: true})
  cpf: string;

  @Column({nullable: false})
  email: string;

  @Column({unique: true})
  telephone: string;
}