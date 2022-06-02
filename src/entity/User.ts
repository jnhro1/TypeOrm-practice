import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Tweet } from "./Tweet";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;

  @OneToMany((type) => Tweet, (tweet) => tweet.user)
  tweets!: Promise<Tweet[]>;

  @Column({type: "int"})
  role?: number

}
