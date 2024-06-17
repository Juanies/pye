"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getUserImage, getUsserSesion } from "../utils/userInfo";
import { doLogout } from "../utils/action";

export default function Menu() {
  const pathName = usePathname();

  const [user, setUser] = useState<string>("");
  const [session, setSession] = useState<string>("");
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
    setSession("");
  }

  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Empleos", link: "/empleos" },
    { name: "Retos", link: "/retos" },
  ];

  return (
    <nav className="h-auto text-[1rem]">
      <ul className="flex items-center space-x-4">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={`${pathName === item.link ? "font-bold text-[#0070B9]" : ""}`}
            >
              {item.name}
            </a>
          </li>
        ))}
        {session ? (
          <>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
                className="text-[#fff] px-4 bg-[#0070B9] block py-[0.4em] rounded-lg"
                href="/sign-up"
              >
                Log out
              </a>
            </li>
            <li>
              <Image src={user} alt="User Avatar" width={42} height={42} />
            </li>
          </>
        ) : (
          <li>
            <a
              href="/login"
              className="text-[#fff] px-4 bg-[#0070B9] block py-[0.4em] rounded-lg"
              onClick={() => setTriggerFetch(!triggerFetch)}
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
