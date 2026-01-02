"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { LuSearch } from "react-icons/lu";

export default function Search() {
  return (
    <Button variant="outline" size="icon" className="cursor-pointer">
      <LuSearch className="h-6 w-6" />
    </Button>
  );
}
