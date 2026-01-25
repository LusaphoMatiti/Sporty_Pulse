import { fetchProductRating } from "@/utils/action";
import { FaStar } from "react-icons/fa";

async function ProductRating({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);

  return (
    <span className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
      <FaStar className="w-3 h-3 text-yellow-500" />
      {rating}
      <span className="ml-1">({count} reviews)</span>
    </span>
  );
}
export default ProductRating;
