"use client";

import { getBehaviorStore } from "@/utils/behaviorStorage";

export function usePopularThisWeek(limit = 6) {
  const store = getBehaviorStore();

  return Object.entries(store)
    .sort(
      (a, b) =>
        b[1].views +
        b[1].interactions * 1.5 -
        (a[1].views + a[1].interactions * 1.5)
    )
    .slice(0, limit)
    .map(([productId]) => productId);
}
