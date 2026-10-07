"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/site";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Gallery() {
  const [selected, setSelected] = useState(0);
  return <section id="galeria" className="section-space bg-[#f6f3ec]"><div className="container-site">
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow mb-4 text-[#5e8490]">Galeria</p><h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-[-.045em]">A casa, por inteiro.</h2></div><p className="max-w-sm text-[#49625d]">Um pouco dos ambientes e da paisagem que fazem parte da estadia.</p></div>
    <Dialog><div className="grid auto-rows-[15rem] grid-cols-2 gap-3 md:auto-rows-[19rem] md:grid-cols-4">{galleryImages.map((image, index) => <DialogTrigger key={image.src} asChild><button onClick={() => setSelected(index)} className={`group relative overflow-hidden text-left ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 3 ? "row-span-2" : ""}`} aria-label={`Ampliar foto: ${image.label}`}><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-[1.03]" /><span className="absolute bottom-0 left-0 bg-[#163c35] px-3 py-1.5 text-xs font-semibold text-[#f6f3ec]">{image.label}</span></button></DialogTrigger>)}</div>
      <DialogContent className="max-w-[min(92vw,64rem)] border-0 bg-[#102f2a] p-2 text-[#f6f3ec] sm:max-w-[min(92vw,64rem)]" aria-describedby="foto-descricao"><DialogTitle className="sr-only">{galleryImages[selected].label}</DialogTitle><DialogDescription id="foto-descricao" className="sr-only">{galleryImages[selected].alt}</DialogDescription><div className="relative h-[75vh] min-h-[20rem]"><Image src={galleryImages[selected].src} alt={galleryImages[selected].alt} fill sizes="92vw" className="object-contain" /></div></DialogContent>
    </Dialog>
  </div></section>;
}
