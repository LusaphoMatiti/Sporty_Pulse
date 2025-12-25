import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/types";

const CartItemsList = ({
  cartItems = [],
}: {
  cartItems?: CartItemWithProduct[];
}) => {
  if (cartItems.length === 0) {
    return <p className="text-sm text-muted-foreground">Your cart is empty.</p>;
  }
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount, product } = cartItem;
        const { name, image, company, id: productId, price } = product;

        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};
export default CartItemsList;
