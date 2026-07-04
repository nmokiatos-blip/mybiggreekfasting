import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about My Big Greek Fasting, fasting, Greek positioning, FastOS, and medical boundaries."
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers. No guru fog."
        body="The positioning is simple: fasting equals freedom. The details still matter."
      />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="border border-limestone bg-marble p-6">
              <h2 className="font-display text-2xl font-black text-deepAegean">{faq.question}</h2>
              <p className="mt-3 text-lg leading-8 text-obsidian/74">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
