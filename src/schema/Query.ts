import { queryType } from "nexus";
import { FieldResolver } from "nexus/dist/core";

const headerCountResolver: FieldResolver<"Query", "headerCount"> = async (
  _root,
  _args,
  ctx,
) => {
  return ctx.prisma.header.count();
};

const itemCountResolver: FieldResolver<"Query", "itemCount"> = async (
  _root,
  _args,
  ctx,
) => {
  const result: [{ count: number }] = await ctx.prisma
    .raw`SELECT COUNT(*) FROM "Item";`;
  return result.length ? result[0].count : 0;
};

export const Query = queryType({
  definition(t) {
    t.crud.header();
    t.crud.headers();
    t.crud.items();
    t.field("headerCount", {
      type: "Int",
      resolve: headerCountResolver,
    });
    t.field("itemCount", {
      type: "Int",
      resolve: itemCountResolver,
    });
  },
});
