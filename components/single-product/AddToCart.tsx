import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button
      className="capitalize mt-8 text-white bg-blue-500 cursor-pointer hover:bg-blue-400"
      size="lg"
    >
      add to cart
    </Button>
  );
};
export default AddToCart;
