import { join } from "path";
import { readGraphQlFiles } from "../lib";

const schema = readGraphQlFiles(
  join(process.cwd(), "graphql/enums.graphql"),
  join(process.cwd(), "graphql/inputs.graphql"),
  join(process.cwd(), "graphql/schema.graphql")
);

export {
  schema as default
};