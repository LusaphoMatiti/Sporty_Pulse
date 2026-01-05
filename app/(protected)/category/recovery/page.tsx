import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function Recovery() {
  const products = await fetchProductsByMuscle("recovery");

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-20">
      <SectionTitle text="Recovery" />
      <ProductsGrid products={products} userId={null} />
    </section>
  );
}
