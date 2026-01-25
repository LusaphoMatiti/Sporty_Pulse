"use client";

import { useState, Suspense } from "react";
import NavbarClient from "./NavbarClient";
import Logo from "./Logo";
import { cenlinks } from "@/utils/links";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "../ui/button";
import CartButton from "./CartButton";
import ModeToggle from "../ModeToggle";
import Search from "./SearchIcon";

type Props = {
  numItemsInCart: number;
};

export default function NavbarShell({ numItemsInCart }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center justify-between py-4 px-4 lg:px-8 ">
        {/* LEFT — Hamburger (mobile only) */}
        <div className="flex items-center w-12 lg:hidden">
          <Button
            onClick={() => setOpen(!open)}
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <LuX size={22} /> : <LuMenu size={22} />}
          </Button>
        </div>

        {/* CENTER — Logo */}
        <div className="lg:ml-10 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Logo />
        </div>

        {/* DESKTOP LINKS */}
        <Suspense>
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 tracking-wider sm:leading-loose">
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
        <div className="flex items-center w-12 lg:w-auto justify-end mr-10 tracking-wider sm:leading-loose">
          {/* Pass isMobile prop */}
          <NavbarClient numItemsInCart={numItemsInCart} />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t py-4">
          <div className="flex flex-col items-center gap-6 justify-center">
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

            <div className="flex flex-row justify-center gap-3 sm:gap-6 mt-5 w-full">
              <CartButton numItemsInCart={numItemsInCart} />
              <ModeToggle />
              <Search onOpen={() => setOpen(false)} /> {/* optional trigger */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
