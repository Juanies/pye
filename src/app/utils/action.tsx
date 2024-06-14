'use server'

import { signIn, signOut } from "@/auth/auth";
import { redirect } from 'next/navigation';

export async function doSocialLogin(formData: { get: (arg0: string) => any; }) {
    const action = formData.get('action');
    await signIn(action);
    redirect("/");
}

export async function doLogout() {
    await signOut({ redirectTo: "/" });
}
