"use client";

import LinksDropdown from "./LinksDropdown";
import CartButton from "./CartButton";
import ModeToggle from "../ModeToggle";
import Search from "./SearchIcon";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

type Props = {
  numItemsInCart: number;
};

export default function NavbarClient({ numItemsInCart }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="flex gap-4 items-center">
      <Search onOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartButton numItemsInCart={numItemsInCart} />
      <ModeToggle />
      <LinksDropdown />
    </div>
  );
}
