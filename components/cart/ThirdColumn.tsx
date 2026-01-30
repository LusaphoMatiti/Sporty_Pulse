"use client";

import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import { SubmitButton } from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/action";
import { toast } from "sonner";

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amount, setAmount] = useState(quantity);

  const handleAmountChange = async (value: number) => {
    setAmount(value);
  };

  return (
    <div className="md:ml-8">
      {/* UPDATE QUANTITY */}
      <form
        action={async (formData: FormData) => {
          toast.loading("Updating quantity...");
          await updateCartItemAction(formData);
          toast.success("Cart updated");
        }}
      >
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="amount" value={amount} />

        <SelectProductAmount
          amount={amount}
          setAmount={handleAmountChange}
          mode={Mode.CartItem}
          isLoading={false}
        />

        <SubmitButton size="sm" className="mt-4" text="Update" />
      </form>

      {/* REMOVE ITEM */}
      <form
        action={async (formData: FormData) => {
          toast.loading("Removing item...");
          await removeCartItemAction(formData);
          toast.success("Item removed");
        }}
      >
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-2" text="Remove" />
      </form>
    </div>
  );
};

export default ThirdColumn;
