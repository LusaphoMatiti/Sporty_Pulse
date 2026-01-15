"use client";

import Container from "@/components/global/Container";
import RecentlyViewedProducts from "./RecentyViewedProducts";

type Props = {
  userId: string | null;
};

export default function BehavioralSections({ userId }: Props) {
  return (
    <Container className="py-30 px-10 sm:py-10 space-y-24">
      <RecentlyViewedProducts userId={userId} />
    </Container>
  );
}
