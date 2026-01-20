"use client";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/action";
import { useAuth } from "@clerk/nextjs";
import { ProductSignButton } from "../form/Buttons";
import { useState } from "react";

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <form action={addToCartAction}>
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
