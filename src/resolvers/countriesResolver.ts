import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, CountryInput, CountryResponse } from "../entities/country";

@Resolver(Country)
class CountriesResolver {
  @Query(() => [CountryResponse])
  async countries() {
    return Country.find();
  }

  @Mutation(() => Country)
  async addCountry(@Arg("data") data: CountryInput) {
    const country = Country.create({
      ...data,
    }).save();

    return country;
  }

  @Query(() => Country)
  async getCountry(@Arg("code") code: string) {
    return Country.findOne({ where: { code } });
  }

  @Query(() => [Country])
  async getCountriesByContinent(@Arg("continent_code") continent_code: string) {
    return Country.find({ where: { continent_code } });
  }
}

export default CountriesResolver;
