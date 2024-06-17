"use client";
import { auth } from "@/auth/auth";
import { JsonArray, JsonObject } from "next-auth/adapters";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserNamem, getUserImage } from "../utils/userInfo";
import Image from "next/image";
export default function Menu() {
  const pathName = usePathname();


  const [user, setUser]  = useState<String>("")

  useEffect(() => {
    async function fetchSession() {
      const name = await getUserImage();
      setUser(name);
    }
    fetchSession();
  }, []);

  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Empleos", link: "/empleos" },
    { name: "Retos", link: "/retos" }
  ];

  return (
    <nav className="h-auto text-[1rem]">
      <Image src={user} width={62} height={62}/>
      <ul className="flex items-center space-x-4">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={`${pathName === item.link ? 'font-bold text-[#0070B9]' : ''}`}
            >
              {item.name}
            </a>
          </li>
        ))}

          <li>
            <a className="text-[#fff] px-4 bg-[#0070B9] block py-[0.4em] rounded-lg" href="/sign-up">Logout</a>
          </li>
          <li>            
            <a className="text-[#fff] px-4 bg-[#0070B9] block py-[0.4em] rounded-lg" href="/sign-up">Login</a>
          </li>
          </ul>
    </nav>
  );
}
