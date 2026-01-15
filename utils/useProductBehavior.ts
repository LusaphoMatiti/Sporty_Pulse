"use client";

import { getBehaviorStore, saveBehaviorStore } from "./behaviorStorage";

export function useProductBehavior() {
  function trackView(productId: string) {
    const store = getBehaviorStore();

    const current = store[productId] ?? {
      views: 0,
      interactions: 0,
      lastViewed: 0,
    };

    store[productId] = {
      ...current,
      views: current.views + 1,
      lastViewed: Date.now(),
    };

    saveBehaviorStore(store);
  }

  function trackInteraction(productId: string) {
    const store = getBehaviorStore();

    const current = store[productId];
    if (!current) return;

    store[productId] = {
      ...current,
      interactions: current.interactions + 1,
    };

    saveBehaviorStore(store);
  }

  return { trackView, trackInteraction };
}
