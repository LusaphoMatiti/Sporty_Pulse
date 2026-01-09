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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container className="py-20">
        <FeaturedProducts />
      </Container>

      <WorkOut />

      <Suspense fallback={<LoadingContainer />}>
        <Container className="py-20">
          <ShopByCategory />
          <UpperBodyProducts />
          <LowerBodyProducts />
          <FullBodyProducts />
          <CoreProducts />
        </Container>
      </Suspense>
    </>
  );
}
