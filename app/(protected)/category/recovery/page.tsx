import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import MarketingLayout from "@/components/layouts/MarketingLayout";

export default async function Recovery() {
  const products = await fetchProductsByMuscle("recovery");

  if (!products.length) return <EmptyList />;

  return (
    <>
      <MarketingLayout>
        <section className="pt-8 mt-20">
          <SectionTitle text="Recovery Tools" />
          <ProductsGrid products={products} userId={null} />
        </section>
      </MarketingLayout>
    </>
  );
}
