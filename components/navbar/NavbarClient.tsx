"use client";

import LinksDropdown from "./LinksDropdown";
import CartButton from "./CartButton";
import ModeToggle from "../ModeToggle";
import Search from "./SearchIcon";

type Props = {
  numItemsInCart: number;
};

export default function NavbarClient({ numItemsInCart }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Search />
      <CartButton numItemsInCart={numItemsInCart} />
      <ModeToggle />
      <LinksDropdown />
    </div>
  );
}
