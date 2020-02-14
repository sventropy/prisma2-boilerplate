import { mutationType } from "nexus";

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneHeader();
    t.crud.createOneItem();
  },
});
