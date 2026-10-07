import Image from "next/image";
import { Wave } from "@/components/wave";

export function About() {
  return <section id="a-casa" className="section-space bg-[#f6f3ec]"><div className="container-site grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
    <div className="order-2 lg:order-1"><p className="eyebrow mb-5 text-[#5e8490]">A Casa</p><h2 className="font-display text-[clamp(3.1rem,7vw,6.4rem)] leading-[.9] tracking-[-.045em]">Um lugar para<br /><em className="font-normal">diminuir o ritmo.</em></h2><Wave className="my-7" /><div className="max-w-xl space-y-5 text-[1.05rem] leading-8 text-[#304e48]"><p>Entre o verde, a água e o silêncio do Encano Alto, a Casa da Lagoa foi preparada para quem procura alguns dias de tranquilidade, privacidade e contato com a natureza.</p><p>Aqui, o tempo encontra outro compasso: manhãs sem pressa, café passado na hora e uma casa simples, acolhedora e cercada de vida.</p></div><a href="#acomodacao" className="mt-8 inline-block border-b border-[#163c35] pb-1 text-sm font-bold">Conhecer a acomodação</a></div>
    <figure className="order-1 relative min-h-[31rem] overflow-hidden rounded-t-[11rem] lg:order-2 lg:min-h-[46rem]"><Image src="/images/exterior-01.webp" alt="Fachada da Casa da Lagoa com varanda e rede" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure>
  </div></section>;
}
