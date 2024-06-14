import SearchInput from "../../../images/searchinput";

export default function SearchBar(){
  return(
      <label className="mt-5 flex items-center w-[40%] bg-gray-800 rounded-lg shadow-md">
        <input type="text" placeholder="Buscador" className="w-full bg-transparent text-[#fff] placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none" />
        <div className="flex items-center justify-center h-full w-auto p-2">
          <SearchInput/>
        </div>
      </label>
  )
}
