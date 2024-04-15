import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Continent, ContinentInput } from "../entities/continent";
import { Country } from "../entities/country";

@Resolver(Continent)
export class ContinentsResolver {
  @Mutation(() => Continent)
  async addContinent(@Arg("data") data: ContinentInput) {
    const continent = Continent.create({ ...data }).save();
    return continent;
  }

  @Query(() => [Continent])
  async getContinents() {
    return Continent.find();
  }
}
