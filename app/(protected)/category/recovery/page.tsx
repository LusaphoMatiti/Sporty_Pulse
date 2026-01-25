import { fetchProductsByMuscle } from "@/utils/action";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import WorkOut from "@/components/home/WorkOut";
import PicQuote from "@/components/quote/PicQuote";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { ProductItem } from "@/components/products/ProductsGrid";

export default async function Recovery() {
  const products = await fetchProductsByMuscle("recovery");

  const productsWithRating: ProductItem[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    price: p.price,
    description: p.description,
    rating:
      p.reviews.length > 0
        ? p.reviews.reduce((acc, r) => acc + r.rating, 0) / p.reviews.length
        : 0,
    reviewCount: p.reviews.length,
    favoriteId: null,
  }));

  return (
    <>
      <BreadCrumbs />
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768595925/4920812-hd_1920_1080_25fps_nqh29o.mp4"
        quote="Your next performance starts with recovery."
      />
      <MarketingLayout>
        {!products.length ? (
          <EmptyList />
        ) : (
          <>
            <section className="pt-12">
              <SectionTitle text="Recovery Tools" />
              <ProductsGrid products={productsWithRating} userId={null} />
            </section>

            <PicQuote
              image="/Recovery.jpg"
              quote="Built in training. Revealed in recovery."
            />
          </>
        )}
      </MarketingLayout>
    </>
  );
}
