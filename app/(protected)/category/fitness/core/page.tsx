import Core from "@/components/categories/Core";
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
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768583253/13265207_1920_1080_50fps_iofvvu.mp4"
        quote="Strong cores don’t happen by accident."
      />

      <MarketingLayout>
        <Core searchParams={resolvedSearchParams} />

        <PicQuote
          image="/core.jpg"
          quote="Control your core. Control everything"
        />
      </MarketingLayout>
    </>
  );
}
