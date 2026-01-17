import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import WorkOut from "@/components/home/WorkOut";
import PicQuote from "@/components/quote/PicQuote";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";

export default async function Recovery() {
  const products = await fetchProductsByMuscle("recovery");

  if (!products.length) return <EmptyList />;

  return (
    <MarketingLayout>
      <BreadCrumbs />
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768595925/4920812-hd_1920_1080_25fps_nqh29o.mp4"
        quote="Your next performance starts with recovery."
      />
      <section className="pt-8 mt-20">
        <SectionTitle text="Recovery Tools" />
        <ProductsGrid products={products} userId={null} />
      </section>
      <PicQuote
        image="/Recovery.jpg"
        quote="Built in training. Revealed in recovery."
      />
    </MarketingLayout>
  );
}
