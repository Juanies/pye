"use client"
import { useState } from "react";
import NewJobForm from "../components/NewJobForm";
import SearchBar from "../components/SearchBar";

export default function Jobs(){

  const [active, setActive] = useState<boolean | null>(false);
  
  const handleClick = () =>  {

    active === true ? setActive(false) : setActive(true)

      console.log(active);
  }


  return(
    <div className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center">
      <h1 className="text-[#0070B9] leading-normal text-[2rem] max-w-[8em] font-semibold">
        Empleos
      </h1>
      <SearchBar showPlusIcon={true} onClickPlus={handleClick}/>
      { active ? (
        <NewJobForm/>
      ) : null      }
      <section className="grid mt-14 grid-cols-2 gap-4	">
        <article className="bg-[#EAE8E8] p-4 rounded-xl flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <p>Imagen</p>
              <p className="font-semibold">Usuario</p>
            </div>
            <p className="text-[#0070B9] font-semibold">20€</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam magna, pharetra id purus sed, ornare molestie lacus. Praesent lacus augue, 
          </p>
        </article>
        <article className="bg-[#EAE8E8] p-4 rounded-xl flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <p>Imagen</p>
              <p className="font-semibold">Usuario</p>
            </div>
            <p className="text-[#0070B9] font-semibold">20€</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam magna, pharetra id purus sed, ornare molestie lacus. Praesent lacus augue, 
          </p>
        </article>
      </section>
    </div>
  )
}
