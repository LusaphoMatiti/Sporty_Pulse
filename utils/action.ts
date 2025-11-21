"use server";

import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";

import { string } from "zod";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.NEXT_PUBLIC_ADMIN_USER_ID) redirect("/");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};

export const fetchFeaturedPro = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return db.product.findMany({
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
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};

export const createProduction = async (
  prevState: any,
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    if (!validatedFields.success) {
      return { success: false, message: validatedFields.message };
    }

    if (!validatedFile.success) {
      return { success: false, message: validatedFile.message };
    }

    const fullPath = await uploadImage(validatedFile.data.image);

    await db.product.create({
      data: {
        ...validatedFields.data,
        image: fullPath,
        clerkId: user.id,
      },
    });

    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Body exceeded 1 MB limit")
    ) {
      return { success: false, message: "File size must be less than 1 MB" };
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const deleteProductAction = async (
  prevState: { productId: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  const { productId } = prevState;
  await getAdminUser();

  try {
    const product = await db.product.delete({
      where: { id: productId },
    });

    await deleteImage(product.image);
    revalidatePath("/admin/products");

    return { success: true, message: "product removed" };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "an error occurred",
    };
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  await getAdminUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/admin/products");
  return product;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    const featured = formData.has("featured");

    // Add validation if needed
    await db.product.update({
      where: { id },
      data: { name, company, description, price, featured },
    });

    revalidatePath(`/admin/products/${id}/edit`);
    return {
      success: true,
      message: "Product updated successfully",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update product";
    return { success: false, message };
  }
};

export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const productId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    if (!validatedFile.success) {
      return {
        success: false,
        message: "Invalid file: " + validatedFile.message,
      };
    }

    const fullPath = await uploadImage(validatedFile.data.image);
    await deleteImage(oldImageUrl);

    await db.product.update({
      where: { id: productId },
      data: { image: fullPath },
    });

    revalidatePath(`/admin/products/${productId}/edit`);
    return {
      success: true,
      message: "Product image updated successfully",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message: errorMessage,
    };
  }
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export async function toggleFavorite(prevState: any, formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, message: "You must be logged in." };
  }

  const productId = String(formData.get("productId"));
  const favoriteIdRaw = formData.get("favoriteId");

  const favoriteId =
    favoriteIdRaw && favoriteIdRaw !== "" ? String(favoriteIdRaw) : null;

  try {
    if (favoriteId) {
      await db.favorite
        .delete({
          where: { id: favoriteId },
        })
        .catch(() => null);

      revalidatePath("/favorites");

      return {
        success: true,
        favoriteId: null,
        message: "Removed from favorites",
      };
    } else {
      const favorite = await db.favorite.create({
        data: {
          productId,
          clerkId: userId,
        },
      });

      revalidatePath("/favorites");

      return {
        success: true,
        favoriteId: favorite.id,
        message: "Added to favorites",
      };
    }
  } catch (error) {
    console.error("Toggle favorite error:", error);
    return { success: false, message: "Something went wrong." };
  }
}

export const fetchUserFavorites = async () => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      clerkId: user.id,
    },
    include: {
      product: true,
    },
  });
  return favorites;
};
