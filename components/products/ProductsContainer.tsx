// ProductsContainer.tsx (Server Component)
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { fetchAllProducts } from "@/utils/action";
import ProductsHeader from "./ProductsHeader"; // client component
import { Separator } from "@/components/ui/separator";
import { Divider } from "@heroui/react";

export default async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;

  return (
    <>
      {/* ✅ Client component boundary */}
      <ProductsHeader totalProducts={totalProducts} />

      {/* ✅ Server-side rendering */}
      {layout === "grid" ? (
        <ProductsGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
}
