import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function LowerBodyProducts() {
  const products = await fetchProductsByMuscle("lower-body");

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-20">
      <SectionTitle text="Lower Body Workout" />
      <ProductsGrid products={products} userId={null} />
    </section>
  );
}
