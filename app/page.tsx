import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Stay } from "@/components/sections/stay";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { Booking } from "@/components/sections/booking";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: { "@type": "PostalAddress", addressLocality: "Indaial", addressRegion: "SC", addressCountry: "BR" },
    sameAs: [siteConfig.instagramUrl, siteConfig.airbnbUrl, siteConfig.bookingUrl],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Stay />
        <Experience />
        <Gallery />
        <Location />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
