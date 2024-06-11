export default function FeaturesCards(){
  const features: string[] = ["Talleres", "Comunidad Activa", "Busca ayuda"];

  return(
     <div className="flex  w-[100%] justify-between lg:flex-row flex-col gap-8 items-center">
        {features.map((feature, index) => (
          <div className="border  text-[#939393] font-semibold border-[#939393] rounded-xl text-[2rem] px-10 py-4" key={index}>
            {feature}
          </div>
        ))}
      </div>
  )

}