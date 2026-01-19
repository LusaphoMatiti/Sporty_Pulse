import UpperBody from "@/components/categories/Upperbody";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";

interface PageProps {
  searchParams: {
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
}

export default function CoreCategoryPage({ searchParams }: PageProps) {
  return (
    <>
      <BreadCrumbs />
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768584093/3209068-uhd_3840_2160_25fps_1_phqcq4.mp4"
        quote="Strength shows when there’s nowhere to hide."
      />
      <MarketingLayout>
        <UpperBody searchParams={searchParams} />
        <PicQuote image="/upperbody.jpg" quote="Push. Pull. Earn it." />
      </MarketingLayout>
    </>
  );
}
