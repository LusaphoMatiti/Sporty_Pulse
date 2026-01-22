"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteProductAction } from "@/utils/action";
import { IconButton } from "@/components/form/Buttons";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const initialState = {
  success: false,
  message: "",
};

export default function DeleteProduct({ productId }: { productId: string }) {
  const [state, formAction] = useActionState(deleteProductAction, initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      setOpen(false);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("productId", productId);

    await formAction(formData);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button type="button">
          <IconButton actionType="delete" />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete equipment?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The product will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel type="button">Cancel</AlertDialogCancel>

          <form action={formAction}>
            <input type="hidden" name="productId" value={productId} />
            <AlertDialogAction type="submit" className="bg-destructive" asChild>
              <button
                type="submit"
                onClick={handleDelete}
                className="bg-destructive"
              >
                Delete
              </button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
