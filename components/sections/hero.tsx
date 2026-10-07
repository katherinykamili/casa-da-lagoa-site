import Image from "next/image";
import { assetPath, siteConfig } from "@/data/site";
import { Wave } from "@/components/wave";

export function Hero() {
  return <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-[#163c35] text-[#f6f3ec]">
    <Image src={assetPath("/images/exterior-02.webp")} alt="Lago e paisagem verde da Casa da Lagoa" fill priority sizes="100vw" className="object-cover object-[57%_center]" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,43,37,.35),rgba(12,43,37,.18)_35%,rgba(12,43,37,.85))]" />
    <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-8 pt-28 md:pb-12">
      <div className="reveal max-w-2xl"><p className="hero-location eyebrow mb-4">Encano Alto · Indaial/SC</p><h1 className="font-display text-[clamp(4rem,13vw,8.5rem)] font-normal leading-[.74] tracking-[-.06em]">Casa da<br />Lagoa</h1><Wave className="my-6 text-[#d8c8ae]" /><p className="font-display text-[clamp(1.65rem,4vw,2.5rem)] italic">{siteConfig.slogan}</p></div>
      <div className="mt-8 grid gap-2 sm:grid-cols-3 sm:gap-3">
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="hero-booking-button px-5 py-3.5 text-center text-sm font-bold transition-transform hover:-translate-y-0.5">Reservar pelo Booking</a>
        <a href={siteConfig.airbnbUrl} target="_blank" rel="noopener noreferrer" className="border border-white/55 bg-[#163c35]/45 px-5 py-3.5 text-center text-sm font-bold backdrop-blur-sm transition-colors hover:bg-[#163c35]">Reservar pelo Airbnb</a>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="border border-white/55 bg-[#163c35]/45 px-5 py-3.5 text-center text-sm font-bold backdrop-blur-sm transition-colors hover:bg-[#163c35]">Falar pelo WhatsApp</a>
      </div>
    </div>
  </section>;
}
