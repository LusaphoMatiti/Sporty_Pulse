import { fetchFilteredProducts } from "@/utils/action";
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

export default async function CoreProducts({ searchParams }: PageProps) {
  const products = await fetchFilteredProducts({
    category: "core",
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    sort: searchParams.sort,
  });

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-8 mt-15">
      <SectionTitle text="Core Equipment" />

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
