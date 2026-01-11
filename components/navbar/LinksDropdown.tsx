"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { LuAlignLeft } from "react-icons/lu";
import { links } from "@/utils/links";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";
import { useAuth } from "@clerk/nextjs";

function LinksDropdown() {
  const router = useRouter();
  const { userId } = useAuth();

  const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-4 max-w-[100px]  cursor-pointer"
          aria-label="User menu"
        >
          <LuAlignLeft className="w-6 h-6 " />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-40 shadow-lg rounded-md"
        align="start"
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </SignedOut>

        <SignedIn>
          {links.map((link) => {
            if (link.label === "dashboard" && !isAdmin) return null;

            return (
              <DropdownMenuItem
                key={link.href}
                onClick={() => router.push(link.href)}
                className="capitalize w-full cursor-pointer"
              >
                {link.label}
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
