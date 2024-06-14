import SearchInput from "../../../images/searchinput";
import SearchBar from "../components/SearchBar";

export default function Jobs(){
  return(
    <div className="flex min-h-screen mx-auto container mt-14 flex-col lg:max-w-6xl md:max-w-2xl items-center">
      <h1 className="text-[#0070B9] leading-normal text-[2rem] max-w-[8em] font-semibold">
        Empleos
      </h1>
      <SearchBar/>
      
    </div>
  )
}
