import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";
import ShopByCategory from "./(protected)/category/page";
import FullBodyProducts from "@/components/categories/Fullbody";
import LowerBodyProducts from "@/components/categories/Lowerbody";
import UpperBodyProducts from "@/components/categories/Upperbody";
import CoreProducts from "@/components/categories/Core";
import WorkOut from "@/components/home/WorkOut";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import BehavioralSections from "@/components/home/BehavioralSections";
import { getServerUserId } from "@/utils/server/auth";

// app/page.tsx (NO CHANGE)
export default async function HomePage() {
  const userId = await getServerUserId();

  return (
    <MarketingLayout>
      <Hero />
      <Container className="py-30 px-10 sm:py-10">
        <FeaturedProducts />
      </Container>

      <BehavioralSections userId={userId} />

      <WorkOut />

      <Suspense fallback={<LoadingContainer />}>
        <Container className="py-35 px-10 sm:py-10">
          <ShopByCategory />
          <UpperBodyProducts />
          <LowerBodyProducts />
          <FullBodyProducts />
          <CoreProducts />
        </Container>
      </Suspense>
    </MarketingLayout>
  );
}
