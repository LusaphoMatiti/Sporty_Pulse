"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

const PRICE_RANGES = [
  { label: "R200.00 – R350.00", min: 200, max: 350 },
  { label: "R350.00 – R749.00", min: 350, max: 749 },
  { label: "R749.00 – R1200.00", min: 749, max: 1200 },
  { label: "Over R1000.00", min: 1000, max: 999999 },
];

export default function PriceRangeFilter() {
  const router = useRouter();
  const params = useSearchParams();

  const activeMin = params.get("minPrice");
  const activeMax = params.get("maxPrice");

  function selectRange(min: number, max: number) {
    const sp = new URLSearchParams(params.toString());
    sp.set("minPrice", String(min));
    sp.set("maxPrice", String(max));
    startTransition(() => {
      router.replace(`?${sp.toString()}`, { scroll: false });
    });
  }

  function clearPrice() {
    const sp = new URLSearchParams(params.toString());
    sp.delete("minPrice");
    sp.delete("maxPrice");

    startTransition(() => {
      router.replace(`?${sp.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="space-y-4">
      <p className="font-semibold text-sm">Shop by Price</p>

      <div className="space-y-3">
        {PRICE_RANGES.map((range) => {
          const checked =
            activeMin === String(range.min) && activeMax === String(range.max);

          return (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => selectRange(range.min, range.max)}
                className="accent-black"
              />
              {range.label}
            </label>
          );
        })}
        {(activeMin || activeMax) && (
          <button
            onClick={clearPrice}
            className="text-semibold underline text-muted-foreground"
          >
            Clear price
          </button>
        )}
      </div>
    </div>
  );
}
