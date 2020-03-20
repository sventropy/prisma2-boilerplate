import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

export const httpLink = createHttpLink({
  uri: "http://localhost:9222",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  resolvers: {},
});

export default client;
