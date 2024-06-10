import Logo from "./Logo";
import Menu from "@/app/components/Menu"
export default function Header() {
  return (
    <header className="flex justify-between items-center  mx-auto container lg:max-w-4xl md:max-w-2xl">
      <div className="flex items-center  font-bold text-2xl">
        <Logo/>
        <h1 className="text-[#0070B9] ">PyE</h1>
      </div>
      <Menu/>
    </header>
  );
}