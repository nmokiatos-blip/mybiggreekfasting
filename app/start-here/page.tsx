import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Start My Big Greek Fasting with the core idea: fasting is freedom from food prison, not punishment."
};

export default function StartHerePage() {
  return (
    <main>
      <PageHero
        eyebrow="Start here"
        title="Fasting is not the prison. Fasting is the door out."
        body="Begin with the core idea: you are not trying to become a heroic meal-skipper. You are trying to stop being controlled by food noise."
        primary={{ href: "/the-method", label: "Enter the Method" }}
        secondary={{ href: "/nicks-journey", label: "Read Nick's Journey" }}
      />
      <Section eyebrow="The reset" title="First, stop making hunger an emergency." surface="white">
        <p>
          Modern food culture trains people to panic at the first clean signal
          from the body. A little hunger appears, and the machine says: snack,
          sip, graze, sweeten, distract.
        </p>
        <p>
          My Big Greek Fasting starts with a different assumption. Hunger is not
          always a crisis. Sometimes it is a signal. Sometimes it is habit
          leaving the room.
        </p>
        <p className="font-black text-deepAegean">
          The first victory is not a long fast. The first victory is calm.
        </p>
      </Section>
      <section className="bg-obsidian px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            ["Simplify food", "Eat in a way that lowers cravings instead of feeding them."],
            ["Create space", "Let meals have edges. Let the body experience quiet."],
            ["Build trust", "Learn that you can miss a meal and still be steady."]
          ].map(([title, body]) => (
            <article key={title} className="border border-white/14 bg-white/7 p-6">
              <h2 className="font-display text-2xl font-black text-laurel">{title}</h2>
              <p className="mt-3 leading-7 text-white/74">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
