"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { CardSubmitButton } from "../form/Buttons";
import { toggleFavorite } from "@/utils/server/favorite";
import { FavoriteState } from "@/utils/app-error";

type Props = {
  productId: string;
  favoriteId: string | null;
  onToggle?: (newFavoriteId: string | null) => void;
};

const initialState: FavoriteState = {
  success: false,
  message: "",
  code: undefined,
  favoriteId: null,
};

export default function FavoriteToggleForm({
  productId,
  favoriteId,
  onToggle,
}: Props) {
  const [state, formAction] = useFormState<FavoriteState, FormData>(
    toggleFavorite,
    {
      ...initialState,
      favoriteId,
    },
  );

  useEffect(() => {
    if (!state.message) return;

    if (!state.success && state.code === "UNAUTHORIZED") {
      toast.error("Sign in to save favorites");
      return;
    }

    state.success ? toast.success(state.message) : toast.error(state.message);

    if (state.success) onToggle?.(state.favoriteId);
  }, [state, onToggle]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="favoriteId" value={state.favoriteId ?? ""} />
      <CardSubmitButton isFavorite={!!state.favoriteId} />
    </form>
  );
}
