"use client";

import { useState } from "react";
import { toast } from "sonner";
import { toggleFavorite } from "@/utils/server-actions/favorite";
import { CardSubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";

type FavoriteToggleButtonFormProps = {
  productId: string;
  favoriteId: string | null;
  onToggle?: (newFavoriteId: string | null) => void; // notify parent
};

export default function FavoriteToggleForm({
  productId,
  favoriteId,
  onToggle,
}: FavoriteToggleButtonFormProps) {
  const [currentFavoriteId, setCurrentFavoriteId] = useState(favoriteId);

  const actionHandler = async (_prevState: any, formData: FormData) => {
    const result = await toggleFavorite(_prevState, formData);
    if (result.success) {
      // Update local favorite state
      const newFavoriteId = currentFavoriteId ? null : productId;
      setCurrentFavoriteId(newFavoriteId);
      onToggle?.(newFavoriteId);

      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    return result;
  };

  return (
    <FormContainer action={actionHandler}>
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="favoriteId" value={currentFavoriteId || ""} />
      <CardSubmitButton isFavorite={!!currentFavoriteId} />
    </FormContainer>
  );
}
