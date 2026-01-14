"use client";

import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

type Props = {
  autoFocus?: boolean;
};

export default function NavSearch({ autoFocus }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) params.set("search", value);
    else params.delete("search");

    replace(`/equipment?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) setSearch("");
  }, [searchParams]);

  return (
    <Input
      autoFocus={autoFocus}
      type="search"
      placeholder="Search training equipment..."
      className="h-12 text-base"
      aria-label="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}
