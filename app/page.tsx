import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FastOSAnnouncement } from "@/components/FastOSAnnouncement";
import { GreekKeyBorder } from "@/components/GreekKeyBorder";
import { freedoms, methodPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fasting = Freedom",
  description:
    "My Big Greek Fasting is about ancestral health, fasting, food freedom, metabolic control, and Nick's personal journey."
};

const originSymbols = [
  ["Sun", "rhythm", "Eat with the day. Fast with the night."],
  ["Sea", "minerals", "Salt, mineral water, movement, and Mediterranean signal."],
  ["Olive oil", "ancestral fat", "Simple fat, simple food, old-world restraint."],
  ["Fasting", "freedom", "The ancient discipline of needing food less."]
];

const methodIcons = ["Fire", "Sun", "Shield", "Laurel"];

const heroManifesto = ["Ancestral Wisdom", "Local Food", "Discipline", "Freedom"];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden bg-[#061A26] text-marble sm:min-h-[680px] lg:min-h-[85vh]">
        <Image
          src="/images/hero-nick-corfu-clean.png"
          alt="Nick in Corfu overlooking the sea, representing Greek ancestral fasting and freedom."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_center] sm:object-[66%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,38,0.96)_0%,rgba(6,26,38,0.82)_38%,rgba(6,26,38,0.34)_67%,rgba(6,26,38,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,168,74,0.08),transparent_24rem),linear-gradient(0deg,rgba(6,26,38,0.36),transparent_34%,rgba(6,26,38,0.1))]" />
        <div className="absolute inset-x-0 top-[88px] h-4 text-laurel/45 greek-meander sm:top-[72px]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-5 text-laurel/55 greek-meander" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-20 pt-40 sm:min-h-[680px] sm:px-8 sm:pt-36 lg:min-h-[85vh] lg:px-12">
          <div className="max-w-[50rem]">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-laurel sm:text-sm">
              My Big Greek Fasting
            </p>
            <h1 className="font-display text-[2.55rem] font-black leading-[1] text-marble text-balance sm:text-6xl lg:text-[3rem] xl:text-[3.3rem]">
              <span className="block">Greek is the source code.</span>
              <span className="mt-2 block">Fasting is the operating system.</span>
              <span className="mt-2 block text-laurel">Freedom is the output.</span>
            </h1>
            <p className="mt-5 font-display text-2xl font-black leading-tight text-laurel sm:text-3xl">
              Fasting = Freedom. The door out of food prison.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-marble/85 sm:text-lg">
              Not a Greek recipe site. Not a diet cult. Not calorie punishment.
              A fasting method built from ancestral wisdom, local food,
              discipline, and freedom.
            </p>
            <div className="mt-8 inline-flex max-w-full items-center gap-5 overflow-x-auto border border-laurel/30 bg-[#061A26]/34 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-marble/86 backdrop-blur sm:text-sm">
              {heroManifesto.map((item, index) => (
                <span key={item} className="inline-flex shrink-0 items-center gap-5 whitespace-nowrap">
                  <span>{item}</span>
                  {index < heroManifesto.length - 1 ? (
                    <span className="h-2 w-2 rounded-full bg-laurel/80" aria-hidden="true" />
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FastOSAnnouncement />

      <section className="stone-surface px-5 py-24 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <GreekKeyBorder className="mb-10 text-laurel/70" />
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.26em] text-terracotta">
                Origin manifesto
              </p>
              <h2 className="font-display text-5xl font-black leading-[0.98] text-deepAegean text-balance sm:text-7xl">
                Greek does not mean recipes. Greek means origin.
              </h2>
            </div>
            <div className="space-y-6 text-xl leading-9 text-obsidian/76">
              <p>
                Greek means ancestral wisdom, simplicity, discipline, sun, sea,
                olive oil, fasting, and freedom.
              </p>
              <p className="font-display text-3xl font-black leading-tight text-obsidian">
                This is not keto tzatziki. This is ancestral signal in a modern world.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {originSymbols.map(([symbol, title, body]) => (
              <article
                key={title}
                className="parchment-card border border-laurel/24 p-6 shadow-[0_16px_50px_rgba(23,23,23,0.07)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-laurel">
                  {symbol}
                </p>
                <h3 className="mt-4 font-display text-3xl font-black text-deepAegean">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-obsidian/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian px-5 py-24 text-marble sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-laurel">
                Food prison
              </p>
              <h2 className="font-display text-5xl font-black leading-tight text-balance sm:text-6xl">
                Modern food teaches panic.
              </h2>
            </div>
            <p className="text-xl leading-9 text-marble/72">
              The cage is not just what you eat. It is the noise around eating:
              the clock, cravings, fear, habit, social pressure, and the
              constant command to snack.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {freedoms.map((item) => (
              <div
                key={item}
                className="border border-marble/12 bg-white/[0.045] p-5 text-lg font-black text-marble shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <span className="mb-4 block h-1 w-12 bg-terracotta" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-14 border-l-4 border-laurel bg-marble/[0.06] p-6 sm:p-8">
            <p className="font-display text-3xl font-black leading-tight text-laurel sm:text-5xl">
              Fasting is not just eating less. It is needing food less.
            </p>
          </div>
        </div>
      </section>

      <section className="marble-surface px-5 py-24 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-terracotta">
                The method
              </p>
              <h2 className="font-display text-5xl font-black leading-tight text-obsidian text-balance sm:text-6xl">
                Discipline should simplify life, not become another cage.
              </h2>
            </div>
            <p className="text-xl leading-9 text-obsidian/74">
              The method starts before the fast: remove the food chaos, quiet the
              body, build a rhythm, and stop treating hunger like an emergency.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {methodPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group parchment-card border border-laurel/20 p-7 shadow-[0_18px_60px_rgba(11,61,92,0.08)] transition duration-300 hover:-translate-y-1 hover:border-laurel/55 hover:shadow-[0_24px_70px_rgba(11,61,92,0.14)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-laurel/45 bg-deepAegean text-[0.65rem] font-black uppercase tracking-[0.12em] text-laurel">
                  {methodIcons[index]}
                </div>
                <h3 className="font-display text-3xl font-black text-deepAegean">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-obsidian/74">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stone-surface px-5 py-24 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-laurel/30 bg-marble shadow-temple">
            <Image
              src="/images/brand-portrait.png"
              alt="Nick's ancestral fasting portrait"
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/82 to-transparent p-6 text-marble">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-laurel">
                Lived experience
              </p>
              <p className="mt-2 font-display text-2xl font-black">No guru costume.</p>
            </div>
          </div>
          <div className="parchment-card border border-laurel/22 p-7 shadow-[0_18px_60px_rgba(23,23,23,0.08)] sm:p-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-terracotta">
              Nick&apos;s Journey
            </p>
            <h2 className="font-display text-5xl font-black leading-tight text-balance sm:text-6xl">
              Personal, direct, rebellious, disciplined.
            </h2>
            <p className="mt-6 text-xl leading-9 text-obsidian/76">
              This project comes from lived experience: rebuilding discipline,
              relearning hunger, rejecting constant eating, and finding a
              simpler way to live in a noisy food culture.
            </p>
            <p className="mt-5 text-lg font-black leading-8 text-deepAegean">
              Not a cult. Not a hack. A method for becoming less controlled by food.
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
