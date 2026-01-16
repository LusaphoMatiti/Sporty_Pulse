import Fullbody from "@/components/categories/Fullbody";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";

export default function CoreCategoryPage() {
  return (
    <>
      <WorkOut
        video="https://res.cloudinary.com/dsoxsrjn2/video/upload/v1768584703/5751971-uhd_3840_2160_25fps_gaya7i.mp4"
        quote="Every rep should count."
      />
      <MarketingLayout>
        <Fullbody />
        <PicQuote
          image="/fullbody.jpg"
          quote="One workout. Total accountability."
        />
      </MarketingLayout>
    </>
  );
}
