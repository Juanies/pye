'use server'

import { auth } from '@/src/auth/auth';
import { signIn, signOut } from "@/src/auth/auth";
import { redirect } from 'next/navigation';

export async function doSocialLogin(formData: { get: (arg0: string) => any; }) {
    const action = formData.get('action');
    await signIn(action);
    redirect("/");
}

export async function doLogout() {
    await signOut({ redirectTo: "/" });
}


