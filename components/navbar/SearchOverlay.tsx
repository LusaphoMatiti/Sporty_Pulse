"use client";

import { useEffect } from "react";
import NavSearch from "./NavSearch";
import { LuX } from "react-icons/lu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: Props) {
  // ESC key close
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Centered search box */}
      <div className="relative z-10 flex min-h-screen items-start justify-center px-4 pt-24">
        <div className="w-full max-w-2xl rounded-xl bg-background p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Search Equipment</h2>
            <button onClick={onClose} aria-label="Close search">
              <LuX className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </button>
          </div>

          <NavSearch autoFocus />
        </div>
      </div>
    </div>
  );
}
