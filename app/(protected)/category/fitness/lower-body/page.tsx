// app/category/fitness/core/page.tsx
import LowerBody from "@/components/categories/Lowerbody";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";

export default function CoreCategoryPage() {
  return (
    <>
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768588495/Untitled_video_-_Made_with_Clipchamp_7_hcnzns.mp4"
        quote="Leg day doesn’t get skipped at home."
      />
      <MarketingLayout>
        <LowerBody />
        <PicQuote
          image="/lowerbody.jpg"
          quote="Strong legs carry everything else."
        />
      </MarketingLayout>
    </>
  );
}
