import { mutationType, FieldResolver, stringArg } from "nexus";
import { lorem, finance } from "faker";
import { ItemType } from "../../clients/react-client/graphql/globalTypes";

const loginResolver: FieldResolver<"Mutation", "login"> = (
  _root,
  { username, password },
  _ctx,
) => {
  // TODO call auth API or issue JWT token, for now, return dummy
  return `${username}-${password}`;
};

const addHeaderWithItemResolver: FieldResolver<
  "Mutation",
  "addHeaderWithItem"
> = (_root, _args, ctx) => {
  return ctx.prisma.header.create({
    data: {
      title: lorem.slug(),
      items: {
        create: [
          {
            title: lorem.slug(),
            type: ItemType.A,
            netAmount: +finance.amount(),
            description: lorem.sentence(),
          },
        ],
      },
    },
  });
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
    t.field("addHeaderWithItem", {
      type: "Header",
      resolve: addHeaderWithItemResolver,
    });
  },
});
