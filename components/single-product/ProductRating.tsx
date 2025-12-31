import { fetchProductRating } from "@/utils/action";
import { FaStar } from "react-icons/fa";

async function ProductRating({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);

  const countValue = `(${count}) reviews`;

  return (
    <span className="flex bg-gray-100 dark:text-black w-30 gap-1 items-center px-2 text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
export default ProductRating;
