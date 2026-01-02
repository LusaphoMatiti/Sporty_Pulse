import { fetchFeaturedPro } from "@/utils/action";
import { getServerUserId } from "@/utils/server/auth";
import { fetchFavoriteId } from "@/utils/server/favorite";
import ProductsGrid from "../products/ProductsGrid";
import SectionTitle from "../global/SectionTitle";
import EmptyList from "../global/EmptyList";

export default async function FeaturedProducts() {
  const userId = await getServerUserId();
  const products = await fetchFeaturedPro();

  if (!products.length) {
    return <EmptyList />;
  }

  const productsWithFavorite = await Promise.all(
    products.map(async (product) => ({
      ...product,
      favoriteId: userId ? await fetchFavoriteId(product.id) : null,
    }))
  );

  return (
    <section className="pt-8">
      <SectionTitle text="featured products" />
      <ProductsGrid products={productsWithFavorite} userId={userId} />
    </section>
  );
}
