"use server";

import { currentUser } from "@clerk/nextjs/server";

export async function getServerUser() {
  return await currentUser();
}

export async function getServerUserId() {
  const user = await currentUser();
  return user?.id || null;
}
