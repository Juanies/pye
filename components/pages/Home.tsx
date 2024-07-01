import Image from "next/image";
import Arrow from "@/src/images/Arrow";
import Economy from '@/src/images/Economy';
import Reputation from '@/src/images/Reputation';
import Proton from "@/src/images/tecno.png";
import FeaturesCards from "@/components/FeaturesCards";
import HyperLink from "@/components/HyperLink";
import SectionCardsJob from "@/components/SectionCardsJob";

export default async function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen mx-auto mt-14 container lg:max-w-6xl md:max-w-2xl">
      <section className="relative flex items-center justify-between w-full min-h-[60dvh] mb-44">
        <div>
          <h1 className="text-[#4F4F4F] text-5xl leading-normal font-semibold max-w-[8em]">
            Programadores y <span className="text-[#0070B9]">estudiantes</span>
          </h1>
          <p className="text-[#939393] font-semibold text-[2rem]">
            Piensa, codifica, revoluciona
          </p>
          <HyperLink text="Únete ya" url="./page.tsx" />
          <Arrow className="absolute left-[10rem] top-[23rem] lg:block hidden" />
        </div>
        <Image src={Proton} alt="Mujer aprendiendo." width={420} height={420} />
      </section>
      <FeaturesCards />
      <section className="flex flex-col w-full gap-28 mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl  font-semibold max-w-[22rem]">
              Sistema de <span className="text-[#0070B9]">Reputación</span>
            </h2>
            <p className="text-[#939393] font-medium text-[2rem] w-[30rem]">
              Gana puntos ayudando a la comunidad y mejora tu reputación.
            </p>
          </div>
          <Reputation />
        </div>
        <div className="flex items-center justify-between">
          <Economy />
          <div>
            <h2 className="text-5xl font-semibold max-w-[22rem]">
              <span className="text-[#0070B9]">Economía</span>
            </h2>
            <p className="text-[#939393] font-medium text-3xl w-[30rem]">
              Gana dinero, elige tu trabajo, completa misiones, juega en el casino y compra en la tienda.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className=" font-semibold text-4xl">
          <span className="text-[#0070B9]">Ofertas de empleo</span>
        </h2>
        <SectionCardsJob limits={3} pages={false} />
      </section>
    </main>
  );
}
