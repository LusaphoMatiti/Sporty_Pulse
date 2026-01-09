import { fetchSimilarProducts } from "@/utils/action";
import ProductsGrid from "../products/ProductsGrid"; // 👈 Adjust path if needed
import { currentUser } from "@clerk/nextjs/server";

interface Props {
  muscle: string | null;
  currentProductId: string;
}

export default async function SimilarProducts({
  muscle,
  currentProductId,
}: Props) {
  if (!muscle) return null;

  const products = await fetchSimilarProducts({
    muscle,
    excludeId: currentProductId,
    limit: 6, // Fetch more to enable scrolling (e.g., 6 items → 2 pages of 3)
  });

  if (!products.length) return null;

  // Map Prisma product to ProductItem shape expected by ProductsGrid
  const productItems = products.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    price: p.price,
    // company is not used in ProductsGrid, so optional
  }));

  // Get current user for favorites
  const user = await currentUser();

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Similar Equipment</h2>
      <ProductsGrid
        products={productItems}
        userId={user?.id || null}
        favoriteMap={undefined} // or fetch favoriteMap if needed
      />
    </section>
  );
}
