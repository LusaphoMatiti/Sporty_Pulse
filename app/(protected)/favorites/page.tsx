import SectionTitle from "@/components/global/SectionTitle";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/action";
import { currentUser } from "@clerk/nextjs/server";

export default async function FavoritesPage() {
  const user = await currentUser();
  const userId = user?.id ?? null;

  const favorites = await fetchUserFavorites();

  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites yet." />;

  const productMap = new Map<string, any>();
  for (const fav of favorites) {
    if (fav.product) {
      if (!productMap.has(fav.product.id)) {
        productMap.set(fav.product.id, {
          id: fav.product.id,
          name: fav.product.name,
          image: fav.product.image,
          price: fav.product.price,
          favoriteId: fav.id,
        });
      }
    }
  }

  const uniqueProducts = Array.from(productMap.values());

  return (
    <>
      <MarketingLayout>
        <div>
          <SectionTitle text="Favorites" />
          <ProductsGrid userId={userId} products={uniqueProducts} />
        </div>
      </MarketingLayout>
    </>
  );
}
