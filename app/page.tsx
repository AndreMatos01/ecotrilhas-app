import Image from "next/image";
import { ExperienceSection } from "./components/experience-section";
import { Header } from "./components/header";
import { ItinerariesSection } from "./components/itineraries-section";
import { WhatsAppFloat } from "./components/whatsapp-float";

export default function Home() {
  return (
    <>
      <main className="relative isolate flex min-h-screen overflow-hidden bg-[#141414] text-white">
        <Image
          src="/ceu.jpg"
          alt="Vista montanhosa do Caparaó ao amanhecer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0.46)_0%,rgba(18,18,18,0.34)_26%,rgba(8,8,8,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_65%,rgba(255,145,70,0.22),transparent_20%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.12),transparent_24%)]" />

        <section className="relative z-10 flex min-h-screen w-full flex-col px-4 pb-10 pt-4 sm:px-6 sm:pt-5 lg:px-10">
          <Header />

          <div className="mx-auto flex w-full max-w-[1320px] flex-1 justify-center">
            <div className="flex w-full max-w-[1080px] flex-col items-center pt-12 text-center sm:pt-14 lg:pt-11">
              <p className="max-w-[13ch] text-balance text-[clamp(2.9rem,11vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-[clamp(3.4rem,6.5vw,5.9rem)] lg:text-[clamp(4.2rem,5.55vw,6rem)]">
                Conecte-se com a natureza.
              </p>

              <p className="mt-5 text-balance text-[clamp(1.9rem,7vw,3rem)] font-light tracking-[-0.045em] text-white/95 sm:mt-7 sm:text-[clamp(2.4rem,4.4vw,4rem)] lg:text-[clamp(2.7rem,3.8vw,4.1rem)]">
                Viva o Caparaó.
              </p>

              <a
                href="#roteiros"
                className="mt-9 inline-flex min-h-[4.15rem] w-full max-w-[22rem] items-center justify-center rounded-full border-2 border-white/90 bg-black/20 px-6 text-center text-[0.95rem] font-extrabold uppercase tracking-[-0.035em] text-white backdrop-blur-[2px] transition duration-200 hover:bg-white hover:text-[#1b1b1b] sm:min-h-[4.4rem] sm:w-auto sm:max-w-none sm:px-14 sm:text-base lg:min-h-[4.6rem] lg:px-9 lg:text-[1.02rem]"
              >
                Conheça todos os roteiros
              </a>
            </div>
          </div>
        </section>
      </main>

      <ItinerariesSection />
      <ExperienceSection />
      <WhatsAppFloat />
    </>
  );
}
