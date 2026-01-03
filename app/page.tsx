import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

import { Suspense } from "react";
import ShopByCategory from "./(protected)/category/page";
import FullBodyProducts from "./(protected)/category/FullBody";
import LowerBodyProducts from "./(protected)/category/LowerBody";
import UpperBodyProducts from "./(protected)/category/UpperBody";
import CoreProducts from "./(protected)/category/Core";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Suspense fallback={<LoadingContainer />}>
        <Container className="py-20">
          <FeaturedProducts />
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
