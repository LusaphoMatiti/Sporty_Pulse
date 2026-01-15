"use client";

import { getBehaviorStore } from "./behaviorStorage";

export function useTrendProducts(limit = 6) {
  const store = getBehaviorStore();
  const now = Date.now();
  const DAY = 1000 * 60 * 60 * 24;

  return Object.entries(store)
    .filter(([, data]) => now - data.lastViewed < DAY * 2)
    .sort(
      (a, b) =>
        b[1].views +
        b[1].interactions * 2 -
        (a[1].views + a[1].interactions * 2)
    )
    .slice(0, limit)
    .map(([productId]) => productId);
}
