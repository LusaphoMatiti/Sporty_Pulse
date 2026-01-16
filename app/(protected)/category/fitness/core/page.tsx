import Core from "@/components/categories/Core";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";

export default function CoreCategoryPage() {
  return (
    <>
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768583253/13265207_1920_1080_50fps_iofvvu.mp4"
        quote="Strong cores don’t happen by accident."
      />
      <MarketingLayout>
        <Core />
        <PicQuote
          image="/core.jpg"
          quote="Control your core. Control everything"
        />
      </MarketingLayout>
    </>
  );
}
