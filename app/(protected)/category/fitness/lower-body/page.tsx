import LowerBody from "@/components/categories/Lowerbody";
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
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768588495/Untitled_video_-_Made_with_Clipchamp_7_hcnzns.mp4"
        quote="Leg day doesn’t get skipped at home."
      />
      <MarketingLayout>
        <LowerBody searchParams={resolvedSearchParams} />
        <PicQuote
          image="/lowerbody.jpg"
          quote="Strong legs carry everything else."
        />
      </MarketingLayout>
    </>
  );
}
