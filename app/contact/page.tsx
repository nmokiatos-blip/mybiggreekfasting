import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact My Big Greek Fasting for updates, FastOS interest, collaborations, and questions."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Questions, collaborations, FastOS interest, or a story to share?"
        body="Reach out directly. Keep it human, specific, and free of guru fog."
        primary={{ href: "mailto:nick@mybiggreekfasting.com", label: "Email Nick" }}
        secondary={{ href: "/ai-prompt-builder", label: "Try Prompt" }}
      />
      <section className="marble-surface px-5 py-20 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-black text-obsidian">
            What to send
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Your fasting goal",
              "Your country and food environment",
              "Your biggest food freedom problem",
              "Whether you want FastOS updates"
            ].map((item) => (
              <div key={item} className="border border-aegean/14 bg-white/82 p-5 font-black text-deepAegean shadow-[0_14px_40px_rgba(8,119,216,0.08)]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-8 text-obsidian/72">
            For now, contact is email-first. The full FastOS builder and update
            flow can be added when the product direction is ready.
          </p>
          <Link href="/" className="mt-8 inline-flex font-black text-deepAegean">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
