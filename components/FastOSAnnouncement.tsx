import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const features = [
  {
    title: "Fill the Form",
    body: "Tell FastOS about your real life, food environment, cravings, schedule, and fasting level."
  },
  {
    title: "Generate the Prompt",
    body: "FastOS builds a structured command file that points your AI to the method first."
  },
  {
    title: "Copy It",
    body: "One click. Your personal fasting prompt is ready."
  },
  {
    title: "Paste Into Any AI",
    body: "Use ChatGPT, Claude, Gemini, Grok, or any AI assistant you prefer."
  }
];

export function FastOSAnnouncement() {
  return (
    <section className="marble-surface border-y border-aegean/12 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-aegean/16 bg-white/86 p-5 shadow-temple sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-2 text-aegean greek-key opacity-70" />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden border border-limestone bg-marble shadow-[0_18px_55px_rgba(8,119,216,0.12)]">
              <Image
                src="/images/fastos-announcement.png"
                alt="FastOS prompt generator logo"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-contain p-6"
              />
            </div>

            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="border border-laurel/40 bg-laurel/12 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-obsidian">
                  NEW
                </span>
                <span className="border border-aegean/25 bg-aegean/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-deepAegean">
                  AI Prompt Generator
                </span>
              </div>
              <h2 className="font-display text-4xl font-black leading-tight text-deepAegean text-balance sm:text-5xl lg:text-6xl">
                Introducing FastOS
              </h2>
              <p className="mt-4 max-w-2xl text-xl font-black leading-8 text-aegean sm:text-2xl">
                The fasting operating system for your favorite AI.
              </p>
              <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-obsidian/76">
                <p>
                  FastOS is not another diet calculator. It is not a macro tracker. It is not a generic meal-plan generator.
                </p>
                <p>
                  FastOS helps you build a personalized fasting prompt based on your real life: your country, your food environment, your cravings, your schedule, your fasting level, your goals, and your constraints.
                </p>
                <p>
                  The FastOS Method is the source code. The prompt generator is the command file. Your AI is the execution engine.
                </p>
                <p>
                  Fill the form. Generate your prompt. Copy it. Paste it into ChatGPT, Claude, Gemini, Grok, or any AI you want.
                </p>
                <p className="font-black text-deepAegean">
                  Stop asking generic AI questions.
                </p>
                <p className="font-display text-3xl font-black leading-tight text-deepAegean text-balance">
                  Give AI your fasting operating system.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <article key={feature.title} className="border border-aegean/14 bg-marble/70 p-5">
                    <h3 className="font-display text-xl font-black text-deepAegean">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-obsidian/72">{feature.body}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href="/fastos">Try FastOS</ButtonLink>
                <Link
                  href="/fastos-method"
                  className="inline-flex font-black uppercase tracking-[0.14em] text-deepAegean transition hover:text-aegean"
                >
                  Read the Method
                </Link>
              </div>
              <p className="mt-5 text-sm font-bold leading-6 text-obsidian/60">
                No login. No API. No data stored. Just your context, your prompt, your AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
