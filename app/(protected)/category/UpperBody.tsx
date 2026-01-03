import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function UpperBodyProducts() {
  const products = await fetchProductsByMuscle("upper-body");

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-20">
      <SectionTitle text="Upper Body Workout" />
      <ProductsGrid products={products} userId={null} />
    </section>
  );
}
