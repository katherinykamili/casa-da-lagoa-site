import { siteConfig } from "@/data/site";
import { Wave } from "@/components/wave";

export function Footer() {
  const links = [["Instagram", siteConfig.instagramUrl], ["WhatsApp", siteConfig.whatsappUrl], ["Booking", siteConfig.bookingUrl], ["Airbnb", siteConfig.airbnbUrl]] as const;
  return <footer className="bg-[#163c35] py-14 text-[#f6f3ec]"><div className="container-site grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-display text-4xl">Casa da Lagoa</p><p className="mt-1 text-xs font-semibold uppercase tracking-[.22em] text-[#d8c8ae]">Encano Alto · Indaial/SC</p><Wave className="my-5 text-[#8ea596]" /><p className="font-display text-xl italic">{siteConfig.slogan}</p></div><div className="md:text-right"><nav className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end" aria-label="Links do rodapé">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">{label}</a>)}</nav><p className="mt-7 text-xs text-[#a8bbb4]">© {new Date().getFullYear()} Casa da Lagoa.</p></div></div></footer>;
}
