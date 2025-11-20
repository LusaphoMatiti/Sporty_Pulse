"use client";

import CardSignInButtonClient from "../form/CardSignInButtonClient";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default function FavoriteToggleButtonClient({
  userId,
  favoriteId,
  productId,
}: {
  userId: string | null;
  favoriteId: string | null;
  productId: string;
}) {
  if (!userId) return <CardSignInButtonClient />;

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
