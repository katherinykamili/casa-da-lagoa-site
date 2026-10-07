import Image from "next/image";
import { Wave } from "@/components/wave";
import { assetPath } from "@/data/site";

export function Experience() {
  return <section id="experiencia" className="section-space bg-[#d8c8ae]"><div className="container-site grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
    <div><p className="eyebrow mb-5 text-[#5e8490]">A experiência</p><h2 className="font-display text-[clamp(3.3rem,8vw,7rem)] leading-[.82] tracking-[-.055em]">Para<br />desacelerar<br /><em className="font-normal">de verdade.</em></h2><Wave className="my-8" /><blockquote className="max-w-xl border-l border-[#163c35]/35 pl-6 font-display text-2xl leading-snug">“Acordar com o verde na janela, preparar um café e deixar o dia acontecer.”</blockquote></div>
    <div className="flex flex-col justify-end"><figure className="relative min-h-[29rem] overflow-hidden rounded-t-full"><Image src={assetPath("/images/current-house-night.webp")} alt="Varanda da Casa da Lagoa iluminada à noite" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" /></figure><p className="mt-7 text-[1.05rem] leading-8 text-[#294841]">A Casa da Lagoa convida a viver o essencial: descansar, observar a paisagem, aproveitar o interior e passar algumas horas longe da pressa da cidade.</p></div>
  </div></section>;
}
