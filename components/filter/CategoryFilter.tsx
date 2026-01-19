"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["core", "upper-body", "lower-body", "full-body"];

export function CategoryFilter() {
  const router = useRouter();
  const params = useSearchParams();

  function setCategory(category: string) {
    const sp = new URLSearchParams(params.toString());
    sp.set("category", category);
    router.push(`?${sp.toString()}`);
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">Category</p>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="block capitalize text-sm"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
