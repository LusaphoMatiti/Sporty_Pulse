import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function CoreProducts() {
  const products = await fetchProductsByMuscle("core");

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-20">
      <SectionTitle text="Core" />
      <ProductsGrid products={products} userId={null} />
    </section>
  );
}
