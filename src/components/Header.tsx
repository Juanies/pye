"use client"
import Logo from "./Logo";
import Menu from "@/components/Menu"
import { auth } from '@/auth/auth';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {



  return (
    <header className="flex justify-between items-center  mx-auto container lg:max-w-6xl md:max-w-2xl">
        <Link href="/" className="flex items-center  font-bold text-2xl">
          <Logo/>
          <h2 className="text-[#0070B9] ">PyE</h2>
        </Link>
      <Menu/>
    </header>
  );
}