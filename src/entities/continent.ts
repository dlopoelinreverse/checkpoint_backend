import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./country";

@Entity()
@ObjectType()
export class Continent extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];
}

@InputType()
export class ContinentInput {
  @Field()
  code: string;

  @Field()
  name: string;
}
