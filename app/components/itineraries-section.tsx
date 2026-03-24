import Image from "next/image";

const itineraries = [
  {
    title: "Pico da Bandeira",
    image: "/horizinte.jpg",
    eyebrow: "Supere-se nas alturas do Caparaó.",
    description:
      "Sinta a energia das montanhas e viva a experiência de conquistar o topo do Pico da Bandeira.",
    cta: "Vou viver essa subida",
  },
  {
    title: "Cachoeiras",
    image: "/morro-igreja.jpg",
    eyebrow: "Mergulhe em águas que revigoram corpo e alma.",
    description:
      "Entre trilhas e quedas d'água cristalinas, descubra o lado mais refrescante e sereno do Caparaó.",
    cta: "Quero sentir essa energia",
  },
  {
    title: "Caparaó de Bike",
    image: "/mar-nuvem.jpg",
    eyebrow: "Pedale entre montanhas, liberdade e paisagens únicas.",
    description:
      "Desafie seus limites e viva o Caparaó sobre duas rodas em roteiros de tirar o fôlego.",
    cta: "Pedalar com a Ecotrilhas",
  },
  {
    title: "Transfer 4x4",
    image: "/horizinte.jpg",
    eyebrow: "Seu destino com conforto, segurança e vista privilegiada.",
    description:
      "Do aeroporto à montanha, a Ecotrilhas te leva com estrutura, experiência e hospitalidade.",
    cta: "Agendar meu transfer",
  },
  {
    title: "Aluguel de equipamentos",
    image: "/mar-nuvem.jpg",
    eyebrow: "Aventure-se com tudo o que precisa sem complicação.",
    description:
      "Conte com equipamentos de qualidade para viver sua experiência com conforto e segurança.",
    cta: "Quero alugar agora",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12.2 5.3a1 1 0 0 1 1.4 0l5.5 5.5a1 1 0 0 1 0 1.4l-5.5 5.5a1 1 0 1 1-1.4-1.4l3.79-3.8H6a1 1 0 1 1 0-2h9.99L12.2 6.7a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function ItinerariesSection() {
  return (
    <section
      id="roteiros"
      className="bg-[#f5f2eb] px-4 py-16 sm:px-6 sm:py-20 lg:px-7 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1860px]">
        <header className="mx-auto w-full max-w-[860px] text-center">
          <h2 className="text-[clamp(2rem,10vw,3.2rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-zinc-900 sm:text-[clamp(2.4rem,5.2vw,4.15rem)]">
            Conheça nossos Roteiros
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[1.02rem] leading-[1.45] tracking-[-0.03em] text-zinc-700 sm:mt-7 sm:text-[clamp(1.05rem,1.8vw,1.55rem)]">
            Cada roteiro é cuidadosamente planejado, com guias credenciados,
            equipamentos próprios e estrutura completa, garantindo tranquilidade do
            início ao fim da experiência.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-5">
          {itineraries.map((itinerary) => (
            <article
              key={itinerary.title}
              className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_40px_rgba(31,26,18,0.08)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(31,26,18,0.12)] md:rounded-[1.8rem]"
            >
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-t-[1.5rem] md:rounded-t-[1.8rem]">
                <Image
                  src={itinerary.image}
                  alt={itinerary.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1535px) 33vw, 20vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center">
                <h3 className="text-[1.15rem] font-extrabold tracking-[-0.04em] text-zinc-900">
                  {itinerary.title}
                </h3>

                <p className="mt-3 text-[0.96rem] font-bold leading-5 tracking-[-0.025em] text-zinc-800">
                  {itinerary.eyebrow}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {itinerary.description}
                </p>

                <div className="mt-6 flex pt-1">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ef6c24] px-5 py-3 text-sm font-extrabold tracking-[-0.03em] text-white transition duration-200 hover:bg-[#d95e1c]"
                  >
                    <ArrowIcon />
                    {itinerary.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
