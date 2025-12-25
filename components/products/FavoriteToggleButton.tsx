"use server";

import { getServerUserId } from "@/utils/server/auth";
import { fetchFavoriteId } from "@/utils/server/favorite";
import CardSignInButtonClient from "../form/CardSignInButtonClient";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default async function FavoriteToggleButton({
  productId,
}: {
  productId: string;
}) {
  const userId = await getServerUserId();

  if (!userId) return <CardSignInButtonClient />;

  const favoriteId = await fetchFavoriteId(productId);

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
