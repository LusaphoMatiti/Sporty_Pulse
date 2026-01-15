import { BehaviorStore } from "@/types/behavior";

const STORAGE_KEY = "product-behavior";

export function getBehaviorStore(): BehaviorStore {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveBehaviorStore(store: BehaviorStore) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getRecentlyViewed(limit = 6): string[] {
  const store = getBehaviorStore();

  return Object.entries(store)
    .sort((a, b) => b[1].lastViewed - a[1].lastViewed)
    .slice(0, limit)
    .map(([productId]) => productId);
}
