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
          className="flex gap-4 max-w-[100px] bg-white dark:bg-gray-800 cursor-pointer"
        >
          <LuAlignLeft className="w-6 h-6 text-black dark:text-white" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-40 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg border border-gray-200 dark:border-gray-700 rounded-md"
        align="start"
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
        </SignedOut>

        <SignedIn>
          {links.map((link) => {
            if (link.label === "dashboard" && !isAdmin) return null;

            return (
              <DropdownMenuItem
                key={link.href}
                onClick={() => router.push(link.href)}
                className="capitalize w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {link.label}
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
          <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
