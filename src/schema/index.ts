import * as Nexus from "nexus";
import { nexusPrismaPlugin } from "nexus-prisma";
import * as Query from "./Query";
import * as Mutation from "./Mutation";
import * as Header from "./types/Header";
import * as Item from "./types/Item";
import * as path from "path";

export default Nexus.makeSchema({
  types: [Query, Mutation, Header, Item],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      "../../node_modules/@types/nexus-typegen/index.d.ts",
    ),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("../context"),
        alias: "Context",
      },
    ],
  },
});
