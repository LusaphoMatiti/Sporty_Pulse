import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";

import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function FullBodyProducts() {
  const products = await fetchProductsByMuscle("full-body");

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-20">
      <SectionTitle text="Full Body" />
      <ProductsGrid products={products} userId={null} />
    </section>
  );
}
