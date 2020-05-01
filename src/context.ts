import { PrismaClient } from "@prisma/client";
import { ContextParameters } from "graphql-yoga/dist/types";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

export const createContext = (contextParams: ContextParameters): Context => ({
  ...contextParams,
  prisma,
});
