"use client"
import { useState } from "react";
import NewJobForm from "../components/NewJobForm";
import SearchBar from "../components/SearchBar";
import SectionCardsJob from "../components/SectionCardsJob";

export default function Jobs(){

  const [active, setActive] = useState<boolean | null>(false);
  
  const handleClick = () =>  {

    active === true ? setActive(false) : setActive(true)

      console.log(active);
  }


return (
  <div className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center">
    <h1 className="text-[#0070B9] text-2xl font-semibold leading-normal max-w-[8em]">
      Empleos
    </h1>
    <SearchBar showPlusIcon={true} onClickPlus={handleClick} />
    {active && <NewJobForm />}
    <SectionCardsJob />
  </div>
);
}
