"use client";

import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside aria-label="Admin navigation">
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "active" : "ghost";
        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
            key={link.href}
          >
            <Link
              href={link.href}
              aria-current={isActivePage ? "page" : undefined}
            >
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
};
export default Sidebar;
