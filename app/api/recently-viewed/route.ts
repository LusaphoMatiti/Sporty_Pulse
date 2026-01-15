import { NextResponse } from "next/server";
import { fetchSingleProduct, fetchFavoriteId } from "@/utils/action";

export async function POST(req: Request) {
  const { ids, userId } = await req.json();

  const products = await Promise.all(
    ids.map(async (id: string) => {
      const product = await fetchSingleProduct(id);
      const favoriteId = userId
        ? await fetchFavoriteId({ productId: id })
        : null;

      return { ...product, favoriteId };
    })
  );

  return NextResponse.json(products);
}
