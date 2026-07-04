import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "FastOS Method",
  description:
    "The FastOS Method is the fasting operating system for the AI age: a readable architecture for turning real life into a personal fasting protocol."
};

const principles = [
  "Fasting is freedom from food noise.",
  "Fasting is not starvation.",
  "Fasting is not punishment.",
  "Fasting is not just calorie restriction.",
  "Fasting should create calm, clarity, structure, and sovereignty.",
  "If fasting depends only on willpower, the method is missing.",
  "Follow the method, not someone else's plate.",
  "Refeed is control, not revenge.",
  "Local ancestral food matters more than imported diet ideology.",
  "FastOS does not replace AI. FastOS teaches AI how to think about fasting."
];

const architecture = [
  {
    title: "Identity",
    body: "Age range, lifestyle, schedule, personality, work rhythm, and social reality."
  },
  {
    title: "Food Environment",
    body: "What the person eats now, where they eat, what foods create cravings, and what foods are available."
  },
  {
    title: "Metabolic State",
    body: "Sugar-adapted, carb-dependent, low-carb, carnivore, keto, fat-adapted, or already fasting."
  },
  {
    title: "Fasting Readiness",
    body: "Whether the person is ready for OMAD, 24h, 48h, 72h, or needs a transition phase."
  },
  {
    title: "Local Availability",
    body: "The specific meats, fish, seafood, fats, waters, mineral waters, sparkling waters, eggs, dairy, traditional foods, and restaurant-safe options realistically available in the user's region."
  },
  {
    title: "Local Ancestral Foods",
    body: "Real foods available in the user's country or region."
  },
  {
    title: "Refeed Strategy",
    body: "How the person eats after fasting. Refeed is not a binge or reward meal."
  },
  {
    title: "Personal Rhythm",
    body: "A sustainable fasting rhythm that fits the person's life."
  },
  {
    title: "AI Guidance",
    body: "The prompt tells the AI to apply the FastOS method instead of producing generic advice."
  }
];

const levels = [
  {
    level: "Level 0",
    title: "Food Prison",
    body: "The person is controlled by cravings, sugar, snacks, bread, pasta, pizza, fast food, emotional eating, or constant hunger.",
    goal: "Remove food noise before forcing fasting."
  },
  {
    level: "Level 1",
    title: "Stabilization",
    body: "The person starts removing sugar, seed oils, ultra-processed foods, snacks, bread, pasta, rice, pizza, desserts, and liquid calories.",
    goal: "Create metabolic calm."
  },
  {
    level: "Level 2",
    title: "Ancestral Eating",
    body: "The person builds meals around real local foods: meat, fish, eggs, seafood, cheese, butter, olive oil where appropriate, mineral water, black coffee, and other simple ancestral foods.",
    goal: "Build satiety and reduce dependency on constant eating."
  },
  {
    level: "Level 3",
    title: "OMAD Builder",
    body: "The person gradually moves toward one meal a day when hunger is calm enough.",
    goal: "Build structure without suffering."
  },
  {
    level: "Level 4",
    title: "24h / 48h Ready",
    body: "The person can test deeper fasting once food noise is lower and energy is stable.",
    goal: "Use fasting as a tool, not punishment."
  },
  {
    level: "Level 5",
    title: "72h Metabolic Reset",
    body: "The person can enter deeper fasting with preparation, mineral awareness, and calm refeeding.",
    goal: "Experience deeper metabolic control."
  },
  {
    level: "Level 6",
    title: "Personal Fasting System",
    body: "The person has their own rhythm based on their real life.",
    goal: "Freedom, flexibility, and sovereignty."
  }
];

const localFoodExamples = [
  {
    place: "Greece",
    foods:
      "lamb, sardines, mackerel, octopus, eggs, feta, yogurt, olive oil, horta, mineral water, Greek coffee."
  },
  {
    place: "France",
    foods:
      "beef, lamb, duck, eggs, sardines, seafood, cheese, butter, mineral water, black coffee."
  },
  {
    place: "United States",
    foods:
      "beef, eggs, bacon without sugar, sardines, butter, local meat, mineral water, black coffee."
  }
];

const availabilityExamples = [
  {
    place: "San Francisco Bay Area",
    foods: [
      "Dungeness crab",
      "oysters",
      "wild salmon",
      "sardines",
      "grass-fed beef",
      "bison",
      "pasture eggs",
      "butter",
      "mineral water in glass bottles",
      "naturally sparkling mineral water"
    ],
    translation:
      "Do not tell this person only \"eat fish.\" Tell them to build around crab, oysters, salmon, sardines, beef, bison, eggs, and mineral water."
  },
  {
    place: "France",
    foods: [
      "oysters",
      "duck",
      "beef",
      "lamb",
      "sardines",
      "eggs",
      "butter",
      "cheese if tolerated",
      "mineral water",
      "naturally sparkling water in glass bottles"
    ],
    translation:
      "Do not force Greek foods. France has its own ancestral plate."
  },
  {
    place: "Greece",
    foods: [
      "sardines",
      "mackerel",
      "octopus",
      "lamb",
      "eggs",
      "feta",
      "yogurt",
      "olive oil",
      "horta",
      "mineral water",
      "Greek coffee"
    ],
    translation:
      "Greek is the source code for Nick's method, but it is not the mandatory menu for everyone."
  },
  {
    place: "Venezuela / Caribbean Coast",
    foods: [
      "local fish",
      "seafood",
      "shrimp",
      "crab where available",
      "beef",
      "chicken",
      "eggs",
      "animal fat",
      "simple vegetables",
      "mineral water",
      "traditional market foods"
    ],
    translation:
      "Build the fasting system from coastal foods, market foods, animal protein, mineral water, and reduced sugar/rice dependency."
  }
];

const safetyItems = [
  "diabetes",
  "blood pressure medication",
  "medication that must be taken with food",
  "pregnancy",
  "eating disorder history",
  "severe dizziness",
  "fainting",
  "serious medical conditions",
  "underweight individuals",
  "teenagers or children"
];

function MethodSection({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-limestone py-12">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-laurel">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-black leading-tight text-deepAegean text-balance sm:text-5xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-obsidian/76">
        {children}
      </div>
    </section>
  );
}

export default function FastOSMethodPage() {
  return (
    <main>
      <section className="marble-surface border-b border-aegean/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
            FastOS Method
          </p>
          <h1 className="max-w-5xl font-display text-4xl font-black leading-[1.02] text-obsidian text-balance sm:text-6xl">
            The fasting operating system for the AI age.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-obsidian/74 sm:text-xl">
            FastOS is not a diet app, a calorie calculator, or a generic fasting
            plan. It is a method for turning your real life, food environment,
            cravings, discipline, and goals into a personal fasting operating
            system.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/fastos">Build Your FastOS Prompt</ButtonLink>
            <ButtonLink href="#architecture" variant="secondary">
              Read the Architecture
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="border border-aegean/16 bg-marble p-5 shadow-[0_18px_50px_rgba(8,119,216,0.08)] sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-aegean">
              How FastOS works
            </p>
            <p className="mt-4 font-display text-2xl font-black leading-tight text-deepAegean sm:text-3xl">
              FastOS Method Page = the source code / brain of the method.
              Prompt Generator = the command file. User&apos;s AI = the
              execution engine. User&apos;s answers = the personal context.
              Final AI answer = the personalized fasting operating system.
            </p>
          </div>

          <MethodSection id="what-fastos-is" eyebrow="01" title="What FastOS Is">
            <p>
              FastOS is a personal fasting operating system based on ancestral
              health, carnivore discipline, fasting freedom, and local food
              adaptation.
            </p>
            <p>
              It does not tell people to copy Nick&apos;s exact Greek plate. It
              teaches them to follow the method behind it.
            </p>
            <p className="font-display text-3xl font-black text-deepAegean">
              Greek is the source code, not the menu.
            </p>
          </MethodSection>

          <MethodSection id="core-philosophy" eyebrow="02" title="The Core Philosophy">
            <ul className="grid gap-3">
              {principles.map((principle) => (
                <li key={principle} className="border border-limestone bg-marble p-4 font-bold text-obsidian/82">
                  {principle}
                </li>
              ))}
            </ul>
          </MethodSection>

          <MethodSection
            id="architecture"
            eyebrow="03"
            title="The FastOS Architecture Formula"
          >
            <div className="border border-aegean/18 bg-deepAegean p-5 text-white sm:p-7">
              <p className="font-display text-2xl font-black leading-tight sm:text-3xl">
                FastOS = Identity + Food Environment + Metabolic State + Fasting
                Readiness + Local Availability + Local Ancestral Foods + Refeed
                Strategy + Personal Rhythm + AI Guidance
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {architecture.map((item) => (
                <article key={item.title} className="border border-limestone bg-marble p-5">
                  <h3 className="font-display text-2xl font-black text-deepAegean">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-obsidian/74">{item.body}</p>
                </article>
              ))}
            </div>
          </MethodSection>

          <MethodSection id="levels" eyebrow="04" title="The FastOS Levels">
            <div className="grid gap-4">
              {levels.map((item) => (
                <article key={item.level} className="border border-limestone bg-white p-5 shadow-[0_12px_35px_rgba(8,119,216,0.06)]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-aegean">
                    {item.level}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-black text-deepAegean">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-obsidian/74">{item.body}</p>
                  <p className="mt-3 text-base leading-7 text-obsidian">
                    <span className="font-black text-deepAegean">Goal: </span>
                    {item.goal}
                  </p>
                </article>
              ))}
            </div>
          </MethodSection>

          <MethodSection
            id="local-food"
            eyebrow="05"
            title="The Local Food Translation Principle"
          >
            <p>
              FastOS adapts to the user&apos;s location. It does not impose
              Greek foods everywhere.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {localFoodExamples.map((item) => (
                <article key={item.place} className="border border-limestone bg-marble p-5">
                  <h3 className="font-display text-2xl font-black text-deepAegean">
                    In {item.place}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-obsidian/74">{item.foods}</p>
                </article>
              ))}
            </div>
            <p className="font-black text-deepAegean">
              The method is universal. The plate is local.
            </p>
          </MethodSection>

          <MethodSection
            id="local-availability"
            eyebrow="06"
            title="The Local Availability Layer"
          >
            <p>
              FastOS does not stop at saying &quot;eat meat,&quot; &quot;eat
              fish,&quot; or &quot;drink mineral water.&quot;
            </p>
            <p className="font-black text-deepAegean">FastOS asks:</p>
            <ul className="grid gap-3">
              {[
                "Which fish are actually available where you live?",
                "Which seafood belongs to your region?",
                "Which meats are realistic, affordable, and culturally normal?",
                "Which animal fats are available?",
                "Which eggs, dairy, or fermented animal foods are traditional or tolerated?",
                "Which mineral waters are available, preferably in glass bottles?",
                "Which sparkling waters are naturally carbonated, not artificially sweetened or flavored?",
                "Which foods are local ancestral foods, and which are imported diet ideology?"
              ].map((question) => (
                <li key={question} className="border border-limestone bg-marble p-4 font-bold text-obsidian/82">
                  {question}
                </li>
              ))}
            </ul>
            <p>
              The goal is not to copy Nick&apos;s Greek plate. In Greece, the
              plate may include sardines, mackerel, octopus, lamb, feta, yogurt,
              olive oil, horta, mineral water, and Greek coffee. In the San
              Francisco Bay Area, the plate may include Dungeness crab, wild
              salmon, sardines, oysters, grass-fed beef, bison, pasture eggs,
              butter, and mineral water in glass bottles.
            </p>
            <p>
              In France, the plate may include oysters, duck, beef, lamb,
              sardines, eggs, butter, cheese if tolerated, mineral water, and
              naturally sparkling water in glass bottles. In the Caribbean or
              coastal Latin America, the plate may include local fish, seafood,
              beef, chicken, eggs, animal fat, simple vegetables, mineral water,
              and traditional market foods.
            </p>
            <p className="font-black text-deepAegean">
              FastOS must always translate the method into the user&apos;s local
              reality.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Generic category", "Fish"],
                ["FastOS translation", "What fish is actually available to this person, in this region, at this price, in this culture?"],
                ["Generic category", "Meat"],
                ["FastOS translation", "Which meats are realistic here: beef, lamb, goat, pork, bison, duck, chicken, rabbit, game, organ meats, or local traditional meats?"],
                ["Generic category", "Water"],
                ["FastOS translation", "Which mineral waters are available? Is sparkling water naturally carbonated? Is it sold in glass bottles? Does it contain sugar, sweeteners, flavoring, or additives?"]
              ].map(([label, text]) => (
                <article key={`${label}-${text}`} className="border border-limestone bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-aegean">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-bold leading-7 text-obsidian/78">
                    {text}
                  </p>
                </article>
              ))}
            </div>
            <p>FastOS food translation must be:</p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                "local",
                "ancestral",
                "practical",
                "affordable when possible",
                "culturally realistic",
                "low-noise",
                "fasting-supportive",
                "not dependent on imported diet trends"
              ].map((rule) => (
                <div key={rule} className="border border-aegean/14 bg-marble p-4 text-sm font-black text-deepAegean">
                  {rule}
                </div>
              ))}
            </div>
            <div className="border border-aegean/20 bg-deepAegean p-5 text-white">
              <h3 className="font-display text-2xl font-black">
                Local Availability Rule
              </h3>
              <p className="mt-3 text-base leading-7">
                Do not tell the user to eat generic &quot;fish&quot; or generic
                &quot;meat&quot; if their region allows more precision.
              </p>
              <p className="mt-3 text-base leading-7">
                Name the specific local options whenever possible. The AI should
                help the user discover their ancestral plate, not copy someone
                else&apos;s menu.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {availabilityExamples.map((example) => (
                <article key={example.place} className="border border-limestone bg-marble p-5">
                  <h3 className="font-display text-2xl font-black text-deepAegean">
                    {example.place}
                  </h3>
                  <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-laurel">
                    Possible FastOS foods
                  </p>
                  <ul className="mt-3 grid gap-2 text-base leading-7 text-obsidian/76">
                    {example.foods.map((food) => (
                      <li key={food}>{food}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-base leading-7 text-obsidian">
                    <span className="font-black text-deepAegean">
                      FastOS translation:{" "}
                    </span>
                    {example.translation}
                  </p>
                </article>
              ))}
            </div>
          </MethodSection>

          <MethodSection id="food-noise" eyebrow="07" title="The Food Noise Principle">
            <p>
              Many people fail fasting because they begin from chaos. If someone
              is eating sugar, pasta, pizza, bread, fast food, snacks, desserts,
              or drinking sweet drinks, FastOS should not immediately push OMAD
              or extended fasting.
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              {["Remove chaos", "Stabilize food", "Delay eating", "Build fasting"].map((step) => (
                <div key={step} className="border border-aegean/14 bg-marble p-4 text-base font-black text-deepAegean">
                  {step}
                </div>
              ))}
            </div>
          </MethodSection>

          <MethodSection id="refeed" eyebrow="08" title="The Refeed Principle">
            <p>
              Refeed is not revenge. Refeed is not a cheat meal. Refeed is not a
              reward for suffering. Refeed is the continuation of the fast.
            </p>
            <p>
              A good refeed is protein-based, simple, local, ancestral, calm,
              mineral-aware, and not sugar/starch-heavy.
            </p>
          </MethodSection>

          <MethodSection
            id="social-reality"
            eyebrow="09"
            title="The Restaurant and Social Reality Principle"
          >
            <p>
              FastOS must help people live in the real world. It must include
              strategies for restaurants, travel, family meals, social pressure,
              work schedules, eating outside often, and limited cooking.
            </p>
          </MethodSection>

          <MethodSection id="safety" eyebrow="10" title="The Safety Principle">
            <p>
              Fasting can be powerful and may require professional medical
              guidance, especially for:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {safetyItems.map((item) => (
                <li key={item} className="border border-limestone bg-marble p-4 font-bold text-obsidian/82">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              FastOS does not make medical claims and must not be presented as a
              medical treatment.
            </p>
          </MethodSection>

          <MethodSection id="ai-instruction" eyebrow="11" title="The AI Instruction Principle">
            <p>
              FastOS is designed for the AI age. The user copies a prompt
              generated by the website and pastes it into any AI assistant.
            </p>
            <p>
              The prompt instructs the AI to first read the FastOS Method page,
              then apply the method to the user&apos;s answers.
            </p>
            <p className="font-display text-3xl font-black text-deepAegean">
              FastOS does not replace AI. FastOS teaches AI how to think about
              fasting.
            </p>
          </MethodSection>

          <section className="border-t border-limestone py-12">
            <div className="border border-aegean/18 bg-deepAegean p-6 text-white shadow-temple sm:p-8">
              <p className="font-display text-4xl font-black leading-tight text-balance">
                FastOS turns your life into a fasting protocol.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/fastos"
                  className="inline-flex bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-deepAegean transition hover:bg-marble"
                >
                  Open Prompt Generator
                </Link>
                <Link
                  href="/the-method"
                  className="inline-flex border border-white/40 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                >
                  Read The Method
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
