"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { updateProductAction } from "@/utils/action";
import { SubmitButton } from "@/components/form/Buttons";
import { useRouter } from "next/navigation";

const initialState = { success: false, message: "" };

export function UpdateProductForm({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, formAction] = useActionState(updateProductAction, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.message) {
      state.success
        ? toast.success("Product updated successfully")
        : router.push("/admin/products");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form
      action={(formData) => {
        const confirmed = window.confirm("Save changes to this product?");
        if (!confirmed) return;
        formAction(formData);
      }}
    >
      {children}
      <SubmitButton text="update product" className="mt-8" />
    </form>
  );
}
