import Fullbody from "@/components/categories/Fullbody";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import PicQuote from "@/components/quote/PicQuote";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";

export default function CoreCategoryPage() {
  return (
    <>
      <BreadCrumbs />
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
