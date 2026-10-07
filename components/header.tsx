"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [["A Casa", "#a-casa"], ["Acomodação", "#acomodacao"], ["Experiência", "#experiencia"], ["Galeria", "#galeria"], ["Localização", "#localizacao"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/15 bg-[#163c35]/92 text-[#f6f3ec] backdrop-blur-md">
      <div className="container-site flex h-[4.75rem] items-center justify-between">
        <a href="#inicio" className="leading-none" aria-label="Casa da Lagoa — início"><span className="font-display block text-[1.55rem] tracking-[-.03em]">Casa da Lagoa</span><span className="mt-1 block text-[.58rem] font-semibold uppercase tracking-[.28em] text-[#d8c8ae]">{siteConfig.complement}</span></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm transition-opacity hover:opacity-65">{label}</a>)}
          <a href="#reservar" className="border border-[#f6f3ec]/70 px-5 py-2 text-sm transition-colors hover:bg-[#f6f3ec] hover:text-[#163c35]">Reservar</a>
        </nav>
        <button onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center lg:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      {open && <nav id="menu-mobile" className="border-t border-white/15 bg-[#163c35] px-6 pb-7 pt-5 lg:hidden" aria-label="Navegação móvel"><div className="flex flex-col">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-lg">{label}</a>)}<a href="#reservar" onClick={() => setOpen(false)} className="mt-5 bg-[#f6f3ec] px-5 py-3 text-center font-semibold text-[#163c35]">Reservar</a></div></nav>}
    </header>
  );
}
