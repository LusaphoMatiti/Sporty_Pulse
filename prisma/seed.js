// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const products = require("./products.json");

const prisma = new PrismaClient();

async function main() {
  console.log(`Starting seed for ${products.length} products...`);

  // Use individual create calls and explicitly set id to undefined
  for (const product of products) {
    try {
      await prisma.product.create({
        data: {
          ...product,
          id: undefined, // Explicitly tell Prisma to use the default UUID
        },
      });
      console.log(`✅ Created: ${product.name}`);
    } catch (error) {
      console.error(`❌ Failed to create ${product.name}:`, error.message);
    }
  }

  console.log(`🎉 Seeding completed!`);
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
