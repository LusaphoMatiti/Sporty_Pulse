"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Button,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { LuAlignLeft } from "react-icons/lu";
import { links } from "@/utils/links";

const LinksDropdown = () => {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="w-10 h-10 bg-gray-200 dark:bg-blue-600 cursor-pointer hover:bg-gray-300 dark:hover:bg-blue-700 flex items-center justify-center rounded-xl transition-colors duration-300 ease-in-out">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation links">
        {links.map((link) => {
          return (
            <DropdownItem
              key={link.href}
              onClick={() => router.push(link.href)}
              className="capitalize w-full cursor-pointer"
            >
              {link.label}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};
export default LinksDropdown;
