import { Button } from "@heroui/button";
import { FaHeart } from "react-icons/fa";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button size="sm" variant="shadow" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleButton;
