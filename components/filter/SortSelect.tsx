"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: High – Low", value: "price-desc" },
  { label: "Price: Low – High", value: "price-asc" },
];

export function SortSelect() {
  const router = useRouter();
  const params = useSearchParams();
  const activeSort = params.get("sort");

  function selectSort(value: string) {
    const sp = new URLSearchParams(params.toString());
    sp.set("sort", value);

    startTransition(() => {
      router.replace(`?${sp.toString()}`, { scroll: false });
    });
  }

  function clearSort() {
    const sp = new URLSearchParams(params.toString());
    sp.delete("sort");

    startTransition(() => {
      router.replace(`?${sp.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="space-y-4">
      <p className="font-semibold text-sm">Sort By</p>

      <div className="space-y-3">
        {SORT_OPTIONS.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              checked={activeSort === option.value}
              onChange={() => selectSort(option.value)}
              className="accent-black"
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Clear button */}
      {activeSort && (
        <button
          onClick={clearSort}
          className="text text-gray-600 underline hover:text-black"
        >
          Clear sort
        </button>
      )}
    </div>
  );
}
