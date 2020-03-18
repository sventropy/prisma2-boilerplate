import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import { createContext } from "./context";

const port = process.env.SERVICE_PORT ?? 9222;
const server = new GraphQLServer({
  schema,
  context: createContext(),
});
server.get("/status", (request: any, response: any) => {
  response.status(200).send("ok");
});
server.start({ port: port }, () =>
  console.log(`🚀 Server ready at port ${port}!`),
);
