"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getUserImage, getUsserSesion } from "@/src/utils/userInfo";
import { doLogout } from "@/src/utils/action";
import Link from "next/link";

export default function Menu() {
  const pathName = usePathname();

  const [user, setUser] = useState<string>("");
  const [session, setSession] = useState<string | null>(null);
  const [triggerFetch, setTriggerFetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSession() {
      const userImage = await getUserImage();
      const userSession = await getUsserSesion();
      setUser(userImage);
      setSession(userSession);
    }
    fetchSession();
  }, [triggerFetch]);

  function handleLogout() {
    doLogout();
    clear();
    setTriggerFetch(!triggerFetch);
  }

  function clear() {
    setUser("");
    setSession(null);
  }

  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Empleos", link: "/empleos" },
    { name: "Retos", link: "/retos" },
  ];

    const MenuList = menu.map((item, index) => (
      <li key={index}>
        <Link
          href={item.link}
          className={`${pathName === item.link ? "font-bold text-[#0070B9]" : ""}`}
        >
          {item.name}
        </Link>
      </li>
    ));

  return (
    <nav className="h-auto text-[1rem]">
      <ul className="flex gap-8 items-center">
        {MenuList}
        {session ? (
          <>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                className="text-[#fff] px-4 bg-[#0070B9] block py-2 rounded-lg"
                href="/sign-up"
              >
                Log out
              </Link>
            </li>
            <li>
              <Image src={user} alt="User Avatar" width={42} height={42} />
            </li>
          </>
        ) : (
          <li>
            <Link
              href="/login"
              className="text-[#fff] px-4 bg-[#0070B9] block py-2 rounded-lg"
              onClick={() => setTriggerFetch(!triggerFetch)}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
