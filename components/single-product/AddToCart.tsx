"use client";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/action";
import { useAuth } from "@clerk/nextjs";
import { ProductSignButton } from "../form/Buttons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
};

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  const router = useRouter();

  const [state, formAction] = useFormState(addToCartAction, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/cart");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <form action={formAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />

          <SubmitButton text="add to cart" className="mt-8" />
        </form>
      ) : (
        <ProductSignButton />
      )}
    </div>
  );
}

export default AddToCart;
