import { queryType, intArg, stringArg } from "nexus";
import { ItemType } from "@prisma/client";

export const Query = queryType({
  definition(t) {
    t.crud.header();
    t.crud.headers();
    t.crud.items();
  },
});
