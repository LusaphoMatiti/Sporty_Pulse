"use client";

import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
function CartButton({ numItemsInCart }: { numItemsInCart: number }) {
  return (
    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-4xl flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors relative duration-300 ease-in-out">
      <Link href="/cart" className="h-4 w-4">
        <LuShoppingCart className="text-gray-800 dark:text-gray-200" />
        <span className="absolute -top-2 text-white rounded-full h-6 w-6 font-bold flex justify-center items-center -right-3 bg-blue-500 text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </div>
  );
}
export default CartButton;
