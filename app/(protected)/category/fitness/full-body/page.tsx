import Fullbody from "@/components/categories/Fullbody";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";

interface PageProps {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  }>;
}

export default async function CoreCategoryPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  return (
    <>
      <BreadCrumbs />
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768584703/5751971-uhd_3840_2160_25fps_gaya7i.mp4"
        quote="Every rep should count."
      />
      <MarketingLayout>
        <Fullbody searchParams={resolvedSearchParams} />
        <PicQuote
          image="/fullbody.jpg"
          quote="One workout. Total accountability."
        />
      </MarketingLayout>
    </>
  );
}
