import { FaStar } from "react-icons/fa";

const ProductRating = ({ productId }: { productId: string }) => {
  // temp
  const rating = 4.2;
  const count = 25;

  const countValue = `${count} reviews`;

  return (
    <span className="flex bg-gray-100 w-30 px-1 gap-1 items-center text-md mt-2 mb-4">
      <FaStar className="w-3 h-3" />
      {rating}
      {countValue}
    </span>
  );
};
export default ProductRating;
