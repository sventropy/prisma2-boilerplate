import { rule, shield, not, deny, allow } from "graphql-shield";
import { Rule } from "graphql-shield/dist/rules";
import { ContextParameters } from "graphql-yoga/dist/types";

const AUTH_HEADER_PREFIX = "Bearer ";
const isAuthenticated: Rule = rule()(
  (_parent, _args, ctx: ContextParameters) => {
    const authHeader = ctx.request.get("Authorization") as string;
    // TODO Validate token
    return (
      authHeader != null &&
      authHeader.length > 0 &&
      authHeader.includes(AUTH_HEADER_PREFIX) &&
      authHeader.replace(AUTH_HEADER_PREFIX, "").length > 0
    );
  },
);

const permissions = shield(
  {
    Query: {
      "*": deny,
      headers: allow,
      items: isAuthenticated,
      headerCount: allow,
      itemCount: not(isAuthenticated),
    },
    Mutation: {
      "*": isAuthenticated,
    },
  },
  {
    fallbackRule: allow,
  },
);

export default permissions;
