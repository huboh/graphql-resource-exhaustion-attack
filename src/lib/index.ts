import { buildSchema } from "graphql";
import { readFileSync } from "fs";

export const readFile = (path: string) => {
  return readFileSync(path, {
    encoding: "utf-8",
    flag: "r"
  });
};

export const readGraphQlFiles = (...filePaths: string[]) => {
  return buildSchema(
    filePaths.map(readFile).join("\n")
  );
};