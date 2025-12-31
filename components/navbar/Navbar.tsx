import Container from "../global/Container";
import NavbarClient from "./NavbarClient";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Suspense } from "react";
import { fetchCartItems } from "@/utils/cart";

async function Navbar() {
  const numItemsInCart = await fetchCartItems();

  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex gap-4 items-center">
          <NavbarClient numItemsInCart={numItemsInCart} />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
