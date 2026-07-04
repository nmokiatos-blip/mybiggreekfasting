import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Nick's Journey",
  description:
    "The personal story behind My Big Greek Fasting: discipline, hunger, food freedom, and a simpler ancestral way."
};

export default function NicksJourneyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nick's Journey"
        title="This is personal. That is why it has teeth."
        body="No white coat performance. No guru pose. This project comes from rebuilding discipline in a food culture designed to keep people eating."
        primary={{ href: "/start-here", label: "Start Here" }}
        secondary={{ href: "/contact", label: "Contact Nick" }}
      />
      <section className="bg-deepAegean px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/18">
            <Image
              src="/images/brand-portrait.png"
              alt="Portrait for Nick's fasting journey"
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/80">
            <p>
              My Big Greek Fasting is about what happens when food stops being
              entertainment, medication, identity, panic button, and background
              noise.
            </p>
            <p>
              It is about returning to something older and cleaner: simple food,
              strong signals, sun, movement, discipline, feast, fast, and the
              confidence that the body can be trusted again.
            </p>
            <p className="font-black text-laurel">
              Fasting did not make life smaller. It made the cage visible.
            </p>
          </div>
        </div>
      </section>
      <Section eyebrow="No guru mask" title="The voice is direct because the problem is direct." surface="white">
        <p>
          Constant eating is not neutral. Sugar dependency is not harmless.
          Hunger panic is not freedom. A life organized around cravings is still
          a life being organized by something else.
        </p>
        <p>
          This project is for people who want a stronger relationship with food,
          hunger, body signals, and discipline without turning health into a
          corporate spreadsheet.
        </p>
      </Section>
    </main>
  );
}
