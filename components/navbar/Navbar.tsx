import Container from "../global/Container";
import { fetchCartItems } from "@/utils/cart";
import NavbarShell from "./NavbarShell";

export default async function Navbar() {
  const numItemsInCart = await fetchCartItems();

  return (
    <nav className="border-b" aria-label="Main navigation">
      {/* Top bar */}
      <Container className="border-b">
        <div className="py-3 flex justify-center text-xs font-medium text-gray-600 dark:text-white tracking-wider sm:leading-loose">
          <p>Welcome to our store</p>
        </div>
      </Container>

      <NavbarShell numItemsInCart={numItemsInCart} />
    </nav>
  );
}
