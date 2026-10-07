const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const assetPath = (path: string) => `${basePath}${path}`;

export const siteConfig = {
  name: "Casa da Lagoa",
  complement: "Encano Alto",
  slogan: "um refúgio para desacelerar",
  description: "Hospedagem aconchegante cercada pela natureza no Encano Alto, em Indaial/SC. Conheça a Casa da Lagoa e consulte disponibilidade pelo Booking, Airbnb ou WhatsApp.",
  siteUrl: basePath
    ? "https://katherinykamili.github.io/casa-da-lagoa-site/"
    : "https://casa-da-lagoa-encano-alto.katherinykc13.chatgpt.site",
  bookingUrl: "https://www.booking.com/Share-TJTWD5",
  airbnbUrl: "https://www.airbnb.com.br/rooms/1236968788522968108?guests=1&adults=1&s=67&unique_share_id=a8691d70-da3c-4360-b670-c9db6914e644",
  phone: "+55 47 98810-5607",
  whatsappUrl: "https://wa.me/5547988105607?text=Ol%C3%A1%21%20Encontrei%20a%20Casa%20da%20Lagoa%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20hospedagem%20e%20disponibilidade.%20%F0%9F%8C%BF",
  instagramHandle: "@casadalagoa.ofc",
  instagramUrl: "https://www.instagram.com/casadalagoa.ofc/",
  location: "Encano Alto · Indaial — Santa Catarina",
  guests: 4, bedrooms: 2, beds: 2, bathrooms: 1,
} as const;

export const galleryImages = [
  { src: assetPath("/images/exterior-02.webp"), alt: "Lago cercado por palmeiras e natureza no Encano Alto", label: "A paisagem" },
  { src: assetPath("/images/exterior-01.webp"), alt: "Fachada rústica da Casa da Lagoa com varanda e rede", label: "A casa" },
  { src: assetPath("/images/room-queen.webp"), alt: "Quarto com cama queen e vista para o verde", label: "Quarto queen" },
  { src: assetPath("/images/kitchen.webp"), alt: "Cozinha equipada com utensílios e geladeira", label: "Cozinha" },
  { src: assetPath("/images/hero.webp"), alt: "Quarto acolhedor com cama de casal e roupas de cama", label: "Quarto casal" },
  { src: assetPath("/images/gallery-03.webp"), alt: "Detalhes de utensílios disponíveis na cozinha", label: "Detalhes" },
] as const;
