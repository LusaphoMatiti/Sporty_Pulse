"use client";

import { getBehaviorStore } from "./behaviorStorage";

export function useRecentlyViewed(limit = 6) {
  const store = getBehaviorStore();

  return Object.entries(store)
    .sort((a, b) => b[1].lastViewed - a[1].lastViewed)
    .slice(0, limit)
    .map(([productId]) => productId);
}
