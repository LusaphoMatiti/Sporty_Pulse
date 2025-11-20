// prisma.config.ts
import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    seed: "node prisma/seed.js",
  },
} satisfies PrismaConfig;
