"use client";

import { Card, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { formatCurrency } from "@/utils/format";
import { createOrderAction } from "@/utils/action";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";
import { defaultConfig } from "tailwind-variants";
import { useActionState } from "react";

const initialState = {
  message: "",
};

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  const [state, action] = useActionState(createOrderAction, initialState);

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="SubTotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} />
        </CardTitle>
      </Card>
      <FormContainer action={action}>
        <SubmitButton text="Place Order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
};

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2 bg-gray-300 h-[0.5px]" />}
    </>
  );
}

export default CartTotals;
