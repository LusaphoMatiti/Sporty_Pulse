"use client";

import { useEffect, useState } from "react";
import { getRecentlyViewed } from "@/utils/behaviorStorage";
import ProductsGrid from "../products/ProductsGrid";
import SectionTitle from "../global/SectionTitle";

type Props = {
  userId: string | null;
};

export default function RecentlyViewedProducts({ userId }: Props) {
  const [products, setProducts] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ids = getRecentlyViewed(6);

    if (!ids.length) {
      setLoaded(true);
      return;
    }

    fetch("/api/recently-viewed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids, userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoaded(true);
      });
  }, [userId]);

  if (!loaded) return null;
  if (!products.length) return null;

  return (
    <section className="pt-12">
      <SectionTitle text="Recently Viewed" />
      <ProductsGrid products={products} userId={userId} />
    </section>
  );
}
