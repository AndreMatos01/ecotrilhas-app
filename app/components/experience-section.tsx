const highlights = [
  {
    value: "Guias credenciados",
    description: "Condutores locais com experiência real em trilhas, clima e segurança.",
  },
  {
    value: "Estrutura completa",
    description: "Equipamentos próprios, apoio logístico e acompanhamento do início ao fim.",
  },
  {
    value: "Roteiros autorais",
    description: "Experiências desenhadas para quem busca natureza, aventura e conexão.",
  },
];

export function ExperienceSection() {
  return (
    <section className="bg-[#f3eee3] px-4 py-16 sm:px-6 sm:py-20 lg:px-7 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1860px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="max-w-[760px]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c5662d]">
            Ecotrilhas
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.2rem,5vw,4.6rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-zinc-900">
            Aventuras planejadas para você viver o Caparaó com tranquilidade.
          </h2>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-7 tracking-[-0.02em] text-zinc-700 sm:text-[1.15rem]">
            Da primeira mensagem até o retorno da trilha, a experiência é organizada
            para que você foque no essencial: aproveitar a paisagem, o ritmo da
            montanha e a sensação de estar em um lugar realmente especial.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((item) => (
            <article
              key={item.value}
              className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(54,39,20,0.08)] backdrop-blur-sm"
            >
              <h3 className="text-xl font-extrabold tracking-[-0.04em] text-zinc-900">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700 sm:text-[0.98rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
