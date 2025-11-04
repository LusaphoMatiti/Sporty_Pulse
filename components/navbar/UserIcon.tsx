"use client";

import { useUser } from "@clerk/nextjs";
import { LuUser } from "react-icons/lu";

export default function UserIcon() {
  const { user } = useUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }

  return (
    <LuUser
      size={50}
      className="w-6 h-6 bg-gray-300 dark:bg-gray-600 text-white rounded-full p-1"
    />
  );
}
