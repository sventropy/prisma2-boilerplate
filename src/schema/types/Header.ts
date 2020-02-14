import { objectType } from "nexus";

export const Header = objectType({
  name: "Header",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.items();
  },
});
