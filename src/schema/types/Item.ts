import { objectType, FieldResolver } from "nexus";

const grossAmountResolver: FieldResolver<"Item", "grossAmount"> = ({
  netAmount,
}) => {
  return +(netAmount * 1.19).toFixed(2);
};

export const Item = objectType({
  name: "Item",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.type();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.netAmount();
    t.field("grossAmount", { type: "Float", resolve: grossAmountResolver });
    t.model.description();
  },
});
