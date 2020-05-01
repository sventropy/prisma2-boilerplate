import { queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.crud.header();
    t.crud.headers();
    t.crud.items();
  },
});
