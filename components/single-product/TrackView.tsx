"use client";

import { useEffect } from "react";
import { trackProductView } from "@/utils/trackProductView";

export default function TrackView({ productId }: { productId: string }) {
  useEffect(() => {
    trackProductView(productId);
  }, [productId]);

  return null;
}
