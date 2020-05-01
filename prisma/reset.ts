import { PrismaClient, ItemType, prismaVersion } from "@prisma/client";

main().catch(e => {
  console.error(e);
});

async function main() {
  const prisma = new PrismaClient();
  await prisma.header.deleteMany({});
  await prisma.item.deleteMany({});
  prisma.disconnect();
}
