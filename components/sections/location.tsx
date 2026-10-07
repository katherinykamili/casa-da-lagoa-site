import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Wave } from "@/components/wave";

export function Location() {
  return <section id="localizacao" className="overflow-hidden bg-[#5e8490] text-[#f6f3ec]"><div className="container-site grid min-h-[35rem] items-center gap-10 py-20 lg:grid-cols-2">
    <div><p className="eyebrow mb-5 text-[#d8c8ae]">Localização</p><h2 className="font-display text-[clamp(3.2rem,8vw,6.5rem)] leading-[.88] tracking-[-.05em]">Encano Alto<br /><em className="font-normal">Indaial — SC</em></h2><Wave className="my-7 text-[#f6f3ec]" /><p className="max-w-lg text-lg leading-8">Próxima a Blumenau e cercada pela tranquilidade do interior do Vale do Itajaí.</p><p className="mt-4 max-w-lg text-sm text-[#e2ecee]">Para preservar a privacidade, a localização exata é informada após a confirmação da reserva.</p></div>
    <div className="relative mx-auto grid aspect-square w-[min(100%,29rem)] place-items-center rounded-full border border-white/35"><div className="absolute inset-[10%] rounded-full border border-white/20" /><div className="absolute inset-[25%] rounded-full border border-white/15" /><div className="relative text-center"><MapPin className="mx-auto mb-5 size-10 text-[#d8c8ae]" strokeWidth={1.3} aria-hidden="true" /><p className="font-display text-3xl">Casa da Lagoa</p><p className="mt-2 text-sm uppercase tracking-[.15em]">{siteConfig.location}</p></div></div>
  </div></section>;
}
