import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import { createContext } from "./context";
import permissions from "./permissions";

const port = process.env.SERVICE_PORT ?? 9222;
const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: params => createContext(params),
});
server.get("/status", (request: any, response: any) => {
  response.status(200).send("ok");
});
server.start({ port: port }, () =>
  console.log(`🚀 Server ready at port ${port}!`),
);
