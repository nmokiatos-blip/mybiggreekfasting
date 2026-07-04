import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { freedoms, methodPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fasting = Freedom",
  description:
    "My Big Greek Fasting is about ancestral health, fasting, food freedom, metabolic control, and Nick's personal journey."
};

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-112px)] overflow-hidden bg-white text-obsidian">
        <Image
          src="/images/greek-island-hero.png"
          alt="Mediterranean ancestral fasting scene for My Big Greek Fasting"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-82"
        />
        <div className="absolute inset-0 hero-vignette" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div>
            <p className="mb-5 max-w-2xl text-xs font-black uppercase tracking-[0.28em] text-deepAegean sm:text-sm">
              Ancestral health. Metabolic control. Food freedom.
            </p>
            <h1 className="font-display text-5xl font-black leading-[0.98] text-deepAegean text-balance drop-shadow-[0_2px_0_rgba(255,255,255,0.72)] sm:text-6xl lg:text-7xl">
              {site.tagline}
              <span className="block text-aegean">The door out of food prison.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-obsidian/76 sm:text-xl">
              My Big Greek Fasting is not a Greek recipe site. It is a direct,
              personal rebellion against hunger noise, sugar dependency,
              constant eating, and the lie that you are fragile without snacks.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/start-here">Start Here</ButtonLink>
              <ButtonLink href="/fastos" variant="light">
                Explore FastOS
              </ButtonLink>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative aspect-square w-full max-w-[390px] overflow-hidden border border-aegean/18 bg-white/78 shadow-temple backdrop-blur">
              <Image
                src="/images/brand-mark.png"
                alt="My Big Greek Fasting circular brand mark"
                fill
                sizes="430px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Not keto tzatziki" title="Greek does not mean recipes. Greek means origin." surface="white">
        <p>
          Greek means ancestral wisdom, simplicity, discipline, sun, sea, olive
          oil, fasting, and freedom.
        </p>
        <p>
          This is not a website for learning a keto version of tzatziki. This is
          about using old signals in a modern world: hunger, feasting, restraint,
          movement, salt, sunlight, and simple food.
        </p>
        <p className="font-black text-deepAegean">
          The goal is not food perfection. The goal is food freedom.
        </p>
      </Section>

      <section className="marble-surface px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
              Freedom from food noise
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-obsidian text-balance sm:text-5xl">
              Fasting is not just eating less. It is needing food less.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {freedoms.map((item) => (
              <div key={item} className="border border-limestone bg-white/72 p-5 text-lg font-black text-obsidian">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
                The method
              </p>
              <h2 className="font-display text-4xl font-black leading-tight text-obsidian text-balance sm:text-5xl">
                Discipline should simplify life, not become another cage.
              </h2>
            </div>
            <p className="text-lg leading-8 text-obsidian/74 sm:text-xl">
              The method starts before the fast: remove the food chaos, quiet the
              body, build a rhythm, and stop treating hunger like an emergency.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {methodPillars.map((pillar) => (
              <article key={pillar.title} className="border border-aegean/14 bg-marble p-6 shadow-[0_14px_40px_rgba(8,119,216,0.08)]">
                <h3 className="font-display text-2xl font-black text-deepAegean">{pillar.title}</h3>
                <p className="mt-3 text-base leading-7 text-obsidian/74">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marble-surface px-5 py-20 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-aegean/18 bg-white shadow-temple">
            <Image
              src="/images/brand-portrait.png"
              alt="Nick's ancestral fasting portrait"
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
              Nick&apos;s Journey
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-balance sm:text-6xl">
              Personal, not guru-style.
            </h2>
            <p className="mt-6 text-lg leading-8 text-obsidian/76 sm:text-xl">
              This project comes from lived experience: rebuilding discipline,
              relearning hunger, rejecting constant eating, and finding a
              simpler way to live in a noisy food culture.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/nicks-journey">Read the Journey</ButtonLink>
              <ButtonLink href="/ai-prompt-builder" variant="light">
                Build a Prompt
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
