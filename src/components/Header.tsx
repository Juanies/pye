"use client"
import Logo from "./Logo";
import Menu from "@/components/Menu"
import { auth } from '@/auth/auth';
import { useState, useEffect } from "react";

export default function Header() {


<li>
          <a className="text-[#fff]  px-4 bg-[#0070B9] block py-[0.4em] rounded-lg" href="/sign-up">Login</a>
        </li>
  return (
    <header className="flex justify-between items-center  mx-auto container lg:max-w-6xl md:max-w-2xl">
      <div className="flex items-center  font-bold text-2xl">
        <Logo/>
        <h2 className="text-[#0070B9] ">PyE</h2>
      </div>
      <Menu/>
    </header>
  );
}