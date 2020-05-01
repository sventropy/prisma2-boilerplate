import { mutationType, FieldResolver, stringArg } from "nexus";

const loginResolver: FieldResolver<"Mutation", "login"> = (
  _root,
  { username, password },
  _ctx,
) => {
  // TODO call auth API or issue JWT token, for now, return dummy
  return `${username}-${password}`;
};

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneHeader();
    t.crud.createOneItem();
    t.field("login", {
      type: "String",
      args: {
        username: stringArg(),
        password: stringArg(),
      },
      resolve: loginResolver,
    });
  },
});
