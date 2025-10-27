// utils/action.ts
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const fetchFeaturedPro = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return JSON.parse(JSON.stringify(products));
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return JSON.parse(JSON.stringify(products));
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return JSON.parse(JSON.stringify(product));
};
