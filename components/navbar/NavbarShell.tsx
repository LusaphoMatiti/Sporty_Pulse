"use client";

import { useState, Suspense } from "react";
import Container from "../global/Container";
import NavbarClient from "./NavbarClient";
import Logo from "./Logo";
import { cenlinks } from "@/utils/links";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "../ui/button";

type Props = {
  numItemsInCart: number;
};

export default function NavbarShell({ numItemsInCart }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center justify-between py-4">
        {/* LEFT — Hamburger (mobile only) */}
        <div className="flex items-center w-12 lg:hidden">
          <Button
            onClick={() => setOpen(!open)}
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="cursor-pointer"
          >
            {open ? <LuX size={22} /> : <LuMenu size={22} />}
          </Button>
        </div>

        {/* CENTER — Logo (mobile center, desktop left) */}
        <div className=" lg:ml-10 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Logo />
        </div>

        {/* CENTER LINKS — desktop only */}
        <Suspense>
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6">
            {cenlinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm hover:text-gray-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </Suspense>

        {/* RIGHT — Icons */}
        <div className="flex items-center w-12 lg:w-auto justify-end mr-10">
          <NavbarClient numItemsInCart={numItemsInCart} />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t py-4">
          <div className="flex flex-col items-center gap-4">
            {cenlinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium hover:text-gray-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
