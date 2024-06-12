"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Proton from "../../images/tecno.png";
import HyperLink from "./components/HyperLink";
import Arrow from "../../images/Arrow";
import FeaturesCards from "./components/FeaturesCards";

export default function Home() {



  return (
    <main className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center justify-between ">
      <section className="flex   w-[100%] justify-between items-center min-h-[60dvh] relative" >
        <div>
          <h1 className=" text-[#4F4F4F] leading-normal text-[4rem] max-w-[8em] font-semibold">
            Programadores y <span className="text-[#0070B9]">estudiantes</span>
          </h1>
          <p className="font-semibold text-[#939393] text-[2rem]">Piensa, codifica, revoluciona</p>
          <HyperLink text="Únete ya" url='./page.tsx'   />
          <Arrow className="absolute lg:block hidden  left-[10rem] top-[23rem]" />
        </div>
        <Image src={Proton} alt="Mujer aprendiendo." width="420" height="420" />
      </section>
      <FeaturesCards/>
    </main>
  );
}