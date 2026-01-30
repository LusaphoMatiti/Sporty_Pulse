import PriceRangeFilter from "./PriceRangeFilter";
import { CategoryFilter } from "./CategoryFilter";
import { SortSelect } from "./SortSelect";
import { fetchFilteredProducts } from "@/utils/action";

interface PageProps {
  searchParams: {
    minPrice?: string;
    maxPrice?: string;
    category?: string;
    sort?: string;
  };
}

async function Filters({ searchParams }: PageProps) {
  const products = await fetchFilteredProducts({
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    category: searchParams.category,
    sort: searchParams.sort,
  });
  return (
    <aside className="flex flex-wrap gap-6 mb-8">
      <CategoryFilter />
      <PriceRangeFilter />
      <SortSelect />
    </aside>
  );
}
export default Filters;
