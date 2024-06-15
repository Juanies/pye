"use server"
import { auth } from "@/auth/auth";

export async function getSessionData() {
  try {
    const session = await auth();
    return session;
  } catch (error) {
    console.error("Error fetching session data:", error);
    return null;
  }
}

export async function getUserName() {
  const session = await auth();
  if (session) {
    console.log(session?.user?.name)
    return session?.user?.name;

  }
  return null;
}

export async function getUserImage() {
  const session = await auth();
  if (session) {
    return session?.user?.image;
  }
  return null;
}

