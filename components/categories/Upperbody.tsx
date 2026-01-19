import { fetchFilteredProducts, fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import CategoryFiltersSidebar from "../filter/CategoryFiltersSidebar";

interface PageProps {
  searchParams: {
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
}

export default async function UpperBodyProducts({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  const products = await fetchFilteredProducts({
    category: "upper-body",
    minPrice: resolvedSearchParams.minPrice
      ? Number(resolvedSearchParams.minPrice)
      : undefined,
    maxPrice: resolvedSearchParams.maxPrice
      ? Number(resolvedSearchParams.maxPrice)
      : undefined,
    sort: resolvedSearchParams.sort,
  });

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-15">
      <SectionTitle text="Upper Body Equipment" />
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10 ">
        <div className="lg:w-64">
          <CategoryFiltersSidebar />
        </div>
        <div className="flex-1">
          <ProductsGrid products={products} userId={null} />
        </div>
      </div>
    </section>
  );
}
