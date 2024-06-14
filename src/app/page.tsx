import { useEffect, useState } from 'react';
import Image from "next/image";
import Proton from "../../images/tecno.png";
import HyperLink from "./components/HyperLink";
import Arrow from "../../images/Arrow";
import FeaturesCards from "./components/FeaturesCards";
import Reputation from '../../images/Reputation';
import Economy from '../../images/Economy';
import { get } from 'http';
import { GetServerSideProps } from "next";
import LoginForm from './components/LoginForm';
import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';




export default async function Home() {
 // const session = await auth();


  return (
    <main className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center justify-between ">
      <section className="flex w-[100%] mb-44 justify-between items-center min-h-[60dvh] relative" >
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
      <section className='flex  w-full flex-col mt-24 gap-28 '>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h2 className='font-semibold   text-[4rem]  max-w-[22rem]'>Sistema de <span className='text-[#0070B9]'>Reputación</span></h2>
              <p className='text-[#939393] 		 font-medium w-[30rem]  text-[2rem]'>Gana puntos ayudando a la comunidad y mejora tu reputación.</p>
            </div>
            <Reputation/>
          </div>
          <div className='flex justify-between items-center   '>
            <Economy/>
            <div className='flex  flex-col 	'>
              <h2 className='font-semibold   text-[4rem]  max-w-[22rem]'>
                <span className='text-[#0070B9]'>Economía</span>
              </h2>
              <p className='text-[#939393] 		 font-medium w-[30rem]  text-[2rem]'>
               Gana dinero, elige tu trabajo, completa misiones, juega en el casino y compra en la tienda.
              </p>
            </div>
          </div>
      </section>
      {/*
      <div>
        <LoginForm/>
        <h1>{session?.user?.name}</h1>
 
      </div> 
      */}
    </main>
  );
}


