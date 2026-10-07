# Casa da Lagoa

Site oficial da Casa da Lagoa, hospedagem no Encano Alto, em Indaial/SC. A página foi pensada para receber visitantes vindos do Instagram, apresentar a casa e encaminhar reservas para Booking, Airbnb ou WhatsApp.

## Tecnologias

- Next.js 16 com Vinext
- React 19 e TypeScript
- Tailwind CSS 4
- Componentes acessíveis Radix UI
- Imagens otimizadas em WebP

## Executar localmente

Tenha o Node.js 22.13 ou superior instalado. Depois, dentro desta pasta:

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão de produção:

```bash
npm run build
```

## Onde alterar conteúdo e links

As informações principais estão centralizadas em `data/site.ts`:

- `bookingUrl`: link do Booking;
- `airbnbUrl`: link do Airbnb;
- `whatsappUrl`: link e mensagem do WhatsApp;
- `instagramUrl`: Instagram;
- `description`, `location` e demais textos curtos;
- `galleryImages`: fotos e textos alternativos da galeria.

Os textos maiores ficam em `components/sections/`, separados por seção.

## Como trocar as fotos

1. Otimize a nova foto para WebP.
2. Coloque o arquivo em `public/images/`.
3. Mantenha o mesmo nome para uma troca direta ou atualize o caminho no componente correspondente.
4. Para a galeria, edite a lista `galleryImages` em `data/site.ts`.

As fotos atuais vieram do anúncio oficial da própria Casa da Lagoa no Airbnb e foram convertidas para WebP.

## Estrutura principal

```text
app/                  páginas, SEO, sitemap e estilos globais
components/           cabeçalho, rodapé e componentes gerais
components/sections/  seções da landing page
data/site.ts          links, telefone, localização e galeria
public/images/        fotos otimizadas
public/favicon.svg    ícone do site
```

## Publicar novamente

Faça as alterações, confirme com `npm run build` e envie um novo commit. Se o provedor estiver conectado ao repositório, ele publicará automaticamente. Neste projeto, a versão pública também pode ser atualizada pelo fluxo de publicação do Codex Sites.

## Links oficiais configurados

- Booking: `https://www.booking.com/Share-TJTWD5`
- Airbnb: anúncio `1236968788522968108`
- WhatsApp: `+55 47 98810-5607`
- Instagram: `@casadalagoa.ofc`
