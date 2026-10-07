import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingWhatsApp() {
  return <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-[#163c35] text-[#f6f3ec] shadow-[0_8px_30px_rgba(22,60,53,.3)] transition-transform hover:scale-105" aria-label="Falar com a Casa da Lagoa pelo WhatsApp"><MessageCircle aria-hidden="true" /></a>;
}
