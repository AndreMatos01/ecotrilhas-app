import Image from "next/image";

const navigationItems = [
  "Nossa História",
  "Roteiros",
  "Sustentabilidade",
  "Estrutura",
  "Contato",
  "Políticas",
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-[1.55rem] w-[1.55rem]" fill="none" viewBox="0 0 24 24">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5.75"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.4" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="mx-auto w-full max-w-[1320px]">
      <div className="mx-auto w-full max-w-[1290px] rounded-[2rem] bg-[#66BB6A] px-4 py-[0.85rem] shadow-[0_18px_60px_rgba(90,38,10,0.28)] sm:rounded-[2.35rem] sm:px-5 md:px-7 lg:rounded-[2.75rem] lg:px-10 lg:py-[0.62rem]">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-6">
          <a href="#" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Ecotrilhas"
              width={300}
              height={74}
              priority
              className="block h-auto w-[220px] sm:w-[248px] lg:w-[260px]"
            />
          </a>

          <nav aria-label="Principal" className="w-full lg:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center text-[1.02rem] font-bold leading-none tracking-[-0.03em] text-white sm:text-[1.14rem] lg:gap-x-8 lg:text-[1.24rem]">
              {navigationItems.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-opacity duration-200 hover:opacity-80">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
