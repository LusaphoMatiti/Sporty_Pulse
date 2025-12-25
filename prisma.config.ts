// prisma.config.ts
import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: env("DATABASE_URL"),
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
