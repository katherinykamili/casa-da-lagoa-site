import Image from "next/image";
import { BedDouble, CarFront, Coffee, CookingPot, PawPrint, Snowflake, Trees, Wifi } from "lucide-react";
import { assetPath, siteConfig } from "@/data/site";

const features = [[BedDouble, "2 quartos", "Uma cama queen e uma cama de casal"], [CookingPot, "Cozinha equipada", "Para preparar refeições com calma"], [Trees, "Acesso ao lago", "Natureza presente do lado de fora"], [Wifi, "Wi-Fi", "Conexão disponível durante a estadia"], [CarFront, "Estacionamento", "Gratuito no local"], [PawPrint, "Pet friendly", "Seu companheiro também é bem-vindo"], [Snowflake, "Ar-condicionado", "Conforto no quarto principal"], [Coffee, "Café em casa", "Cafeteira elétrica disponível"]] as const;

export function Stay() {
  return <section id="acomodacao" className="section-space bg-[#163c35] text-[#f6f3ec]"><div className="container-site">
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-4 text-[#8ea596]">A acomodação</p><h2 className="font-display max-w-3xl text-[clamp(3rem,7vw,6rem)] leading-[.92] tracking-[-.045em]">Acolhedora por dentro.<br /><em className="font-normal text-[#d8c8ae]">Natureza por todos os lados.</em></h2></div><p className="max-w-xs text-sm leading-6 text-[#dfe7e2]">Casa inteira para até {siteConfig.guests} hóspedes, com {siteConfig.bedrooms} quartos, {siteConfig.beds} camas e {siteConfig.bathrooms} banheiro.</p></div>
    <div className="grid gap-4 md:grid-cols-2"><figure className="relative min-h-[28rem] overflow-hidden md:min-h-[42rem]"><Image src={assetPath("/images/current-bedroom-queen.webp")} alt="Quarto principal atual com cama queen e roupa de cama clara" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure><figure className="relative min-h-[28rem] overflow-hidden md:mt-24 md:min-h-[42rem]"><Image src={assetPath("/images/current-kitchen.webp")} alt="Cozinha equipada com mesa posta para os hóspedes" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></figure></div>
    <div className="mt-14 grid gap-x-8 gap-y-8 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, title, text]) => <div key={title} className="flex gap-4"><Icon className="mt-1 size-5 shrink-0 text-[#8ea596]" strokeWidth={1.5} aria-hidden="true" /><div><h3 className="font-display text-xl">{title}</h3><p className="mt-1 text-sm leading-6 text-[#cdd9d4]">{text}</p></div></div>)}</div>
  </div></section>;
}
