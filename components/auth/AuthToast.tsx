"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

export default function AuthToast() {
  const { isSignedIn, user } = useUser();
  const hasShown = useRef(false);

  useEffect(() => {
    if (!isSignedIn || !user) return;
    if (hasShown.current) return;

    const isNewUser =
      user.createdAt &&
      user.lastSignInAt &&
      user.createdAt === user.lastSignInAt;

    if (isNewUser) {
      toast.success("Account created 🎉");
    } else {
      toast.success(`Welcome back, ${user.firstName} 💪`);
    }

    hasShown.current = true;
  }, [isSignedIn, user]);

  return null;
}
