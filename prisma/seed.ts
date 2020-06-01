import { PrismaClient, ItemType } from "@prisma/client";
import { lorem, finance } from "faker";

main().catch(e => {
  console.error(e);
});

async function main() {
  const prisma = new PrismaClient();
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: {
        create: [
          {
            title: lorem.slug(),
            type: ItemType.B,
            netAmount: +finance.amount(),
            description: lorem.sentence(),
          },
        ],
      },
    },
  });
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: {
        create: [
          {
            title: lorem.slug(),
            type: ItemType.A,
            netAmount: +finance.amount(),
            description: lorem.sentence(),
          },
          {
            title: lorem.slug(),
            type: ItemType.C,
            netAmount: +finance.amount(),
            description: lorem.sentence(),
          },
        ],
      },
    },
  });
  await prisma.header.create({
    data: {
      title: lorem.slug(),
      items: {
        create: [
          {
            title: lorem.slug(),
            type: ItemType.B,
            netAmount: +finance.amount(),
            description: lorem.sentence(),
          },
        ],
      },
    },
  });
  await prisma.disconnect();
}
