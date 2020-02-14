import { objectType } from "nexus";

export const Item = objectType({
  name: "Item",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.type();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
