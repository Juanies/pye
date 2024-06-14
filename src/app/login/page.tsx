import Computer from "../../../images/Computer";
import LoginForm from "../components/LoginForm";

export default function Login(){
  return(
    <div className="flex mx-auto container mt-14 flex-col lg:flex-row lg:max-w-6xl md:max-w-2xl items-center justify-between ">
      <div className="flex flex-col gap-6">   
        <div>
          <h2 className="text-[#4F4F4F] text-[4rem] font-semibold">Inicia <span className="text-[#0070B9]">Sesión</span></h2>
          <p className="text-[2rem] max-w-96 text-[#939393] font-normal">Con Discord, tu acceso es inmediato  </p>
        </div>
        <LoginForm/>
      </div>  
      <Computer/>
    </div>
  )
} 