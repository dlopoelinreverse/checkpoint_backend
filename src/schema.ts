import { buildSchema } from "type-graphql";
import CountriesResolver from "./resolvers/countriesResolver";
import { ContinentsResolver } from "./resolvers/continentsResolver";

export default buildSchema({
  resolvers: [CountriesResolver, ContinentsResolver],
});
