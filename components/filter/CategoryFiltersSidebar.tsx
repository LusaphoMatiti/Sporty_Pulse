"use client";

import { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import { SortSelect } from "./SortSelect";
import { Button } from "../ui/button";
import clsx from "clsx";

export default function CategoryFiltersSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Desktop + Mobile) */}
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="mb-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
      >
        {open ? "Hide filters" : "Show filters"}
      </Button>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className={clsx(
          "hidden lg:block transition-all duration-300 ease-in-out",
          open ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden",
        )}
      >
        {open && (
          <div className="pr-6">
            <FiltersContent />
          </div>
        )}
      </aside>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>

          <div className="p-6 overflow-y-auto">
            <FiltersContent />
          </div>
        </div>
      )}
    </>
  );
}

function FiltersContent() {
  return (
    <div className="space-y-8">
      <PriceRangeFilter />
      <SortSelect />
    </div>
  );
}
