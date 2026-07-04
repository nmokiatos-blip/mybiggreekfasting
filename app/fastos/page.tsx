import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FastOS",
  description:
    "FastOS is the future AI system for adapting fasting and ancestral eating to your country, schedule, personality, and food availability."
};

export default function FastOSPage() {
  return (
    <main>
      <PageHero
        eyebrow="FastOS"
        title="A future AI operating system for fasting in the real world."
        body="FastOS will help people adapt fasting and ancestral eating to their own country, lifestyle, food availability, schedule, culture, and personality."
        primary={{ href: "/ai-prompt-builder", label: "Try Prompt Builder" }}
        secondary={{ href: "/contact", label: "Get Updates" }}
      />
      <section className="bg-white px-5 py-20 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Country and local foods",
              "Work schedule and family life",
              "Personality and friction points",
              "Fasting level and food tolerance"
            ].map((item) => (
              <div key={item} className="border border-aegean/14 bg-marble p-6 font-black text-deepAegean shadow-[0_14px_40px_rgba(8,119,216,0.08)]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-4xl font-black text-obsidian text-balance">
              Not another generic fasting calculator.
            </h2>
            <p className="mt-5 text-lg leading-8 text-obsidian/74">
              The point is adaptation. A person in Greece, Canada, Nigeria,
              Japan, Brazil, or a night-shift apartment kitchen does not need
              the same food script. FastOS will turn principles into prompts,
              plans, and experiments that fit the actual life in front of you.
            </p>
            <div className="mt-8">
              <ButtonLink href="/ai-prompt-builder">Open the Builder</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
