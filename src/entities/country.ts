import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";
import { Continent } from "./continent";
import { ObjectId } from "../utils";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  // @Column()
  // @Field()
  // continent_code: string;

  @ManyToOne(() => Continent, (continent) => continent.countries, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @Field()
  continent: Continent;
}

@ObjectType()
export class CountryResponse {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}

@InputType()
export class CountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field(() => ObjectId)
  continent: ObjectId;
}
