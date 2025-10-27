// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const products = require("./products.json");

const prisma = new PrismaClient();

async function main() {
  console.log(`Starting seed...`);

  // Use createMany for better performance
  const result = await prisma.product.createMany({
    data: products,
    skipDuplicates: true, // Prevents errors if products already exist
  });

  console.log(`Seeded ${result.count} products successfully!`);
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
