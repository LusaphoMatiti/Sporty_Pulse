import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";
import ShopByCategory from "./(protected)/category/page";

import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";

import { getServerUserId } from "@/utils/server/auth";

// app/page.tsx (NO CHANGE)
export default async function HomePage() {
  const userId = await getServerUserId();

  return (
    <MarketingLayout>
      <Hero />
      <Container className="py-30 px-10 sm:py-10">
        <ShopByCategory />
      </Container>
      <div className="mt-20">
        <WorkOut
          video="https://res.cloudinary.com/dsoxsrjn2/video/upload/f_auto,q_auto,w_1920/homeworkout_2_mwfnpw.mp4"
          quote="No gym. No excuses. Just work."
        />
      </div>

      <Suspense fallback={<LoadingContainer />}>
        <Container className="py-35 px-10 sm:py-10">
          <FeaturedProducts />
        </Container>
      </Suspense>
    </MarketingLayout>
  );
}
