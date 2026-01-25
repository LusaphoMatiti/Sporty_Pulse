import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";
import ShopByCategory from "./(protected)/category/page";

import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";

import { getServerUserId } from "@/utils/server/auth";

export default async function HomePage() {
  const userId = await getServerUserId();

  return (
    <MarketingLayout>
      <Hero />
      <div className="pt-5 sm:px-10">
        <ShopByCategory />
      </div>
      <div className="mt-3 sm:mt-3">
        <WorkOut
          video="https://res.cloudinary.com/dsoxsrjn2/video/upload/f_auto,q_auto,w_1920/homeworkout_2_mwfnpw.mp4"
          quote="No gym. No excuses. Just work."
        />
      </div>

      <Suspense fallback={<LoadingContainer />}>
        <Container className="py-10 px-10 sm:py-5">
          <FeaturedProducts />
        </Container>
      </Suspense>
    </MarketingLayout>
  );
}
