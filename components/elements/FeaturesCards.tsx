import Tools from "@/src/images/Tools";
import Search from "@/src/images/Search";
import HeartBeat from "@/src/images/HeartBeat";

export default function FeaturesCards(){
  const featureObje = {
    "Talleres": Tools,
    "Comunidad Activa": HeartBeat,
    "Busca ayuda": Search
  };

  const featureList = Object.entries(featureObje).map(([featureName, FeatureIcon], index) => (
    <div className="border text-[#939393] flex items-center justify-center flex-col  font-semibold bg-gradient-to-tl from-[#EAE8E8] via-[#EAE8E8] to-sky-200 to-95% rounded-xl text-[2rem] px-10 py-4" key={index}>
      <FeatureIcon/>
      {featureName}
    </div>
  ))
  return (
    <div className="flex w-[100%] justify-between lg:flex-row flex-col gap-8 items-center">
      {featureList}
    </div>
  );
}
