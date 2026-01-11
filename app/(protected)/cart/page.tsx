import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { fetchOrCreateCart, updateCart } from "@/utils/action";
import getAuthUser from "@/utils/action";
import { redirect } from "next/navigation";

async function CartPage() {
  const user = await getAuthUser();
  if (!user.id) redirect("/");
  const previousCart = await fetchOrCreateCart();
  const cart = await updateCart(previousCart);
  if (cart.numItemsInCart === 0) {
    return <SectionTitle text="Empty Cart" />;
  }

  return (
    <>
      <MarketingLayout>
        <SectionTitle text="Shopping Cart" />
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItemsList cartItems={cart.cartItems} />
          </div>
          <div className="lg:col-span-4">
            <CartTotals cart={cart} />
          </div>
        </div>
      </MarketingLayout>
    </>
  );
}

export default CartPage;
