"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { FavoriteState } from "@/utils/server/favorite";
import { CardSubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { toggleFavorite } from "@/utils/server/favorite";

type Props = {
  productId: string;
  favoriteId: string | null;
  onToggle?: (newFavoriteId: string | null) => void;
};

const initialState: FavoriteState = {
  success: false,
  message: "",
  favoriteId: null,
};

export default function FavoriteToggleForm({
  productId,
  favoriteId,
  onToggle,
}: Props) {
  const [state, formAction] = useFormState(toggleFavorite, {
    ...initialState,
    favoriteId,
  });

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      onToggle?.(state.favoriteId);
    } else {
      toast.error(state.message);
    }
  }, [state, onToggle]);

  return (
    <form action={formAction}>
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="favoriteId" value={state.favoriteId ?? ""} />
      <CardSubmitButton isFavorite={!!state.favoriteId} />
    </form>
  );
}
