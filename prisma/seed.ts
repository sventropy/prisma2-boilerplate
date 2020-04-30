import { PrismaClient, ItemType } from "@prisma/client";
import { lorem } from "faker";

main().catch(e => {
  console.error(e);
});

async function main() {
  const prisma = new PrismaClient();
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: { create: [{ title: lorem.slug(), type: ItemType.B }] },
    },
  });
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: { create: [{ title: lorem.slug(), type: ItemType.A }] },
    },
  });
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: { create: [{ title: lorem.slug(), type: ItemType.B }] },
    },
  });
  await prisma.disconnect();
}
