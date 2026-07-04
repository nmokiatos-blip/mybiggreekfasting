import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { GreekKeyBorder } from "@/components/GreekKeyBorder";

const architecture = [
  {
    step: "01",
    title: "FastOS Method Page",
    role: "source code",
    body: "The philosophy, rules, water principle, local food translation, safety logic, and fasting progression."
  },
  {
    step: "02",
    title: "Prompt Generator",
    role: "command file",
    body: "A structured instruction set that tells your AI how to think before it answers."
  },
  {
    step: "03",
    title: "User's AI",
    role: "execution engine",
    body: "ChatGPT, Claude, Gemini, Grok, or any assistant you trust to run the method."
  },
  {
    step: "04",
    title: "User's answers",
    role: "personal context",
    body: "Your country, cravings, schedule, fasting level, goals, constraints, and real food environment."
  }
];

export function FastOSAnnouncement() {
  return (
    <section className="aegean-surface border-y border-laurel/25 px-5 py-24 text-marble sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-laurel/30 bg-obsidian/22 p-5 shadow-temple backdrop-blur sm:p-8 lg:p-10">
          <GreekKeyBorder className="absolute inset-x-0 top-3 h-5 text-laurel/70" />
          <div className="grid gap-12 pt-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden border border-laurel/30 bg-marble/95 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                <Image
                  src="/images/fastos-announcement.png"
                  alt="FastOS prompt generator logo"
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="mt-6 border border-laurel/25 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-laurel">
                  Ancient wisdom meets AI
                </p>
                <p className="mt-3 font-display text-2xl font-black leading-tight text-marble">
                  Not a tracker. Not a calculator. A fasting operating system.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="border border-laurel/45 bg-laurel/14 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-laurel">
                  NEW
                </span>
                <span className="border border-marble/20 bg-white/[0.055] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-marble">
                  AI Prompt Generator
                </span>
              </div>
              <h2 className="font-display text-5xl font-black leading-tight text-marble text-balance sm:text-6xl lg:text-7xl">
                Introducing FastOS
              </h2>
              <p className="mt-4 max-w-2xl text-2xl font-black leading-9 text-laurel">
                The fasting operating system for your favorite AI.
              </p>
              <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-marble/78">
                <p>
                  FastOS helps you build a personalized fasting prompt based on
                  your real life: country, food environment, cravings, schedule,
                  fasting level, goals, and constraints.
                </p>
                <p>
                  Stop asking generic AI questions. Give AI your fasting
                  operating system.
                </p>
              </div>

              <div className="mt-9 grid gap-3">
                {architecture.map((item) => (
                  <article
                    key={item.step}
                    className="grid gap-4 border border-laurel/24 bg-white/[0.055] p-5 sm:grid-cols-[4.5rem_1fr] sm:items-start"
                  >
                    <div className="flex h-14 w-14 items-center justify-center border border-laurel/45 bg-deepAegean font-display text-xl font-black text-laurel">
                      {item.step}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-2xl font-black text-marble">
                          {item.title}
                        </h3>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-laurel">
                          {item.role}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-marble/68">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href="/fastos">Try FastOS</ButtonLink>
                <Link
                  href="/fastos-method"
                  className="inline-flex font-black uppercase tracking-[0.14em] text-laurel transition hover:text-marble"
                >
                  Read the Method
                </Link>
              </div>
              <p className="mt-5 text-sm font-bold leading-6 text-marble/56">
                No login. No API. No data stored. Just your context, your prompt, your AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
