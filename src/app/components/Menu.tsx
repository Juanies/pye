"use client";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Menu() {
  const menu = [
    { name: "Inicio", link: "/" },
    { name: "Empleos", link: "/empleos" },
    { name: "Retos", link: "/retos" }
  ];

  const pathName = usePathname();

  return (
    <nav className="h-auto text-[1rem]">
      <ul className="flex items-center space-x-4">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={` ${pathName === item.link ? 'font-bold text-[#0070B9]' : ''}`}
            >
              {item.name}
            </a>
          </li>
        ))}

        <li>
          <a className="text-[#fff]  px-4 bg-[#0070B9] block py-[0.4em] rounded-lg" href="/sign-up">Login</a>
        </li>
      </ul>
    </nav>
  );
}
