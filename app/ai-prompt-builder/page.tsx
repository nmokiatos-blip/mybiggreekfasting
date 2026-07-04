import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "AI Prompt Builder",
  description:
    "A practical AI prompt builder concept for adapting fasting and ancestral eating to your life."
};

export default function AiPromptBuilderPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI Prompt Builder"
        title="Build prompts that adapt fasting to your actual life."
        body="This is the first public shape of FastOS: practical prompts for country, schedule, food access, personality, and fasting experience."
        primary={{ href: "/fastos", label: "Learn FastOS" }}
        secondary={{ href: "/contact", label: "Request Access" }}
      />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="border border-limestone bg-marble p-6 sm:p-8">
            <h2 className="font-display text-3xl font-black text-deepAegean">
              Starter prompt
            </h2>
            <div className="mt-5 whitespace-pre-wrap border border-limestone bg-white p-5 font-mono text-sm leading-7 text-obsidian/82">
{`Act as a practical ancestral fasting coach. I want food freedom, metabolic control, and less hunger noise without medical claims or extreme advice.

My country:
My normal foods:
My work schedule:
My family/social constraints:
My fasting experience:
My biggest friction point:
My preferred eating style:

Create a simple fasting and ancestral eating experiment for the next 7 days. Keep it realistic, culturally adaptable, and focused on freedom rather than punishment.`}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Local foods", "Real constraints", "Personality fit"].map((item) => (
              <div key={item} className="border border-limestone bg-white p-5 font-black text-deepAegean">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
