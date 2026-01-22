"use client";

import { toast } from "sonner";

export const showActionToast = (result?: {
  success?: boolean;
  message?: string;
}) => {
  if (!result) return;

  if (result.success) {
    toast.success(result.message || "Completed. Well done!");
  } else {
    toast.error(result.message || "Something went wrong");
  }
};
