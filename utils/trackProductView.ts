"use client";

import { getBehaviorStore, saveBehaviorStore } from "@/utils/behaviorStorage";

export function trackProductView(productId: string) {
  const store = getBehaviorStore();

  store[productId] = {
    views: (store[productId]?.views ?? 0) + 1,
    interactions: store[productId]?.interactions ?? 0,
    lastViewed: Date.now(),
  };

  saveBehaviorStore(store);
}
