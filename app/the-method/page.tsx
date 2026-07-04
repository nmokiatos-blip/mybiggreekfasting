import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { methodPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "The My Big Greek Fasting method: real food, fasting rhythm, metabolic control, and freedom instead of punishment."
};

export default function MethodPage() {
  return (
    <main>
      <PageHero
        eyebrow="The method"
        title="Remove the chaos before you worship the fast."
        body="Fasting works best when the food, rhythm, environment, and intention support it. This is structure without guru theater."
        primary={{ href: "/fastos", label: "See FastOS" }}
        secondary={{ href: "/faq", label: "Read FAQ" }}
      />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {methodPillars.map((pillar) => (
            <article key={pillar.title} className="border border-limestone bg-marble p-6">
              <h2 className="font-display text-3xl font-black text-deepAegean">{pillar.title}</h2>
              <p className="mt-4 text-lg leading-8 text-obsidian/74">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
      <Section eyebrow="Smallest useful rules" title="The method is strict about signals, not theatrical about suffering." dark>
        <p>
          Eat food that makes the next fast easier. Stop outsourcing every
          uncomfortable signal to sugar, snacks, and constant stimulation.
        </p>
        <p>
          Use fasting to reveal what controls you: the clock, stress, boredom,
          social pressure, cravings, or the fear that you cannot function
          without eating.
        </p>
      </Section>
    </main>
  );
}
