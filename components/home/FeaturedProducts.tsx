import { fetchFeaturedPro } from "@/utils/action";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type ServerBoundaryProps = {
  products: Product[];
};

export default async function FeaturedProducts() {
  const products = await fetchFeaturedPro();

  if (!products.length) {
    return <EmptyList />;
  }

  return <ServerBoundary products={products} />;
}

// 👇 subcomponent defined below in same file
function ServerBoundary({ products }: ServerBoundaryProps) {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
