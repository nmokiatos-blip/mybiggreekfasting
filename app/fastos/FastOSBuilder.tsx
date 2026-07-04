"use client";

import { useMemo, useState } from "react";

const FASTOS_METHOD_URL = "https://www.mybiggreekfasting.com/fastos-method";

type FormValues = {
  name: string;
  ageRange: string;
  country: string;
  schedule: string;
  currentFood: string;
  problemFoods: string;
  ancestralFoods: string;
  foodEnvironment: string;
  fastingLevel: string;
  fastingEffects: string[];
  willpower: string;
  mainGoal: string;
  fastingGift: string;
  controlledBy: string;
  safetyNote: string;
  lifestyleConstraints: string;
  guideStyle: string;
  preferredApproach: string;
};

type FieldProps = {
  id: keyof FormValues;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (id: keyof FormValues, value: string) => void;
};

const initialValues: FormValues = {
  name: "",
  ageRange: "",
  country: "",
  schedule: "",
  currentFood: "",
  problemFoods: "",
  ancestralFoods: "",
  foodEnvironment: "",
  fastingLevel: "",
  fastingEffects: [],
  willpower: "",
  mainGoal: "",
  fastingGift: "",
  controlledBy: "",
  safetyNote: "",
  lifestyleConstraints: "",
  guideStyle: "",
  preferredApproach: ""
};

const ageRanges = ["Under 25", "25-34", "35-44", "45-54", "55-64", "65+"];

const foodEnvironments = [
  "I cook most meals",
  "I eat outside often",
  "Family meals influence me",
  "Work schedule makes food difficult",
  "I travel often",
  "I do not know yet"
];

const fastingLevels = [
  "I have never fasted",
  "I skip breakfast sometimes",
  "16-18 hours",
  "OMAD",
  "24 hours",
  "48 hours",
  "72 hours",
  "Longer than 72 hours"
];

const fastingEffects = [
  "Hunger panic",
  "Cravings",
  "Headaches",
  "Low energy",
  "Social pressure",
  "Emotional eating",
  "I feel fine",
  "I have not tried yet"
];

const willpowerOptions = [
  "Yes, fasting feels like a fight",
  "Sometimes",
  "No, it feels natural",
  "I do not know yet"
];

const goals = [
  "Weight loss",
  "Food freedom",
  "Metabolic flexibility",
  "Mental clarity",
  "Discipline",
  "Reduce cravings",
  "Rebuild health",
  "Other"
];

const guideStyles = [
  "Direct and strict",
  "Gentle and supportive",
  "Philosophical and motivational",
  "Practical and step-by-step",
  "Very simple",
  "Nick-style: direct, ancestral, no nonsense"
];

const preferredApproaches = [
  "Start very slowly",
  "Build toward OMAD",
  "Build toward 24h fasts",
  "Build toward 48h fasts",
  "Build toward 72h fasts",
  "I need the AI to decide based on my context"
];

function safeValue(value: string, fallback = "Not answered") {
  return value.trim() || fallback;
}

function listValue(values: string[]) {
  return values.length > 0 ? values.join(", ") : "Not answered";
}

function buildPrompt(values: FormValues) {
  const nameLine = values.name.trim()
    ? `My name or nickname is ${values.name.trim()}.`
    : "I have not provided a name or nickname.";

  return `You are my fasting and ancestral health guide. Your job is not to give me a generic diet. Your job is to help me build a realistic fasting method based on my life, my food environment, my current discipline, my fasting experience, and my constraints.

Before answering, access and read the FastOS Method page:

${FASTOS_METHOD_URL}

Use that page as the source of truth for the FastOS philosophy, architecture, levels, food-noise principle, local-food translation, refeed strategy, and safety principles.

Do not answer from generic diet knowledge alone. First digest the FastOS Method, then apply it to my personal context below.

Fasting is not starvation. Fasting is not punishment. Fasting is not just calorie restriction. Fasting is freedom from food noise.

Do not simply tell me to use willpower. If fasting depends only on willpower, the method is missing. Help me make fasting feel natural, safe, structured, and realistic.

Help me understand when, how, and why I eat - not only what I eat.

Use ancestral wisdom, carnivore discipline, and fasting freedom as the guiding principles.

Here is my real-life context:

About me:
- ${nameLine}
- Age range: ${safeValue(values.ageRange)}
- Country / region: ${safeValue(values.country)}
- Typical daily schedule: ${safeValue(values.schedule)}

Current food reality:
- What I currently eat most often: ${safeValue(values.currentFood)}
- Foods that create the most cravings or problems for me: ${safeValue(values.problemFoods)}
- Real ancestral foods available where I live: ${safeValue(values.ancestralFoods)}
- Food environment: ${safeValue(values.foodEnvironment)}

Fasting experience:
- Current fasting level: ${safeValue(values.fastingLevel)}
- What happens when I try to fast: ${listValue(values.fastingEffects)}
- Do I rely mostly on willpower? ${safeValue(values.willpower)}

Goals:
- Main goal: ${safeValue(values.mainGoal)}
- What I want fasting to give me: ${safeValue(values.fastingGift)}
- What I want to stop being controlled by: ${safeValue(values.controlledBy)}

Constraints:
- Medical / safety note: ${safeValue(values.safetyNote, "No specific note provided. Still remind me when professional medical guidance may be needed.")}
- Lifestyle constraints: ${safeValue(values.lifestyleConstraints)}

How I want to be guided:
- Style: ${safeValue(values.guideStyle)}
- Preferred fasting approach: ${safeValue(values.preferredApproach)}

Please produce:
1. FastOS Diagnosis
2. Food Environment Analysis
3. Food Noise and Craving Analysis
4. Local Ancestral Food Translation
5. Step-by-Step Adaptation Plan
6. Restaurant and Social Strategy
7. Refeed Strategy
8. Safety and Medical Warning Section
9. Questions Before Precision
10. Simple 7-Day Transition Plan
11. Longer-Term FastOS Progression
12. Personal FastOS Rules

Important behavior:
- If I am a beginner, do not immediately prescribe OMAD or extended fasting.
- If I am still eating sugar, pasta, bread, pizza, fast food, snacks, or desserts, first recommend stabilization.
- Diagnose readiness before assigning fasting intensity.
- Adapt food suggestions to my country and region.
- Avoid shame, moral judgment, or diet-cult language.
- Avoid calorie counting unless I specifically ask.
- Avoid generic macro plans.
- Avoid fake keto snacks, diet soda, sugar-free junk, seed oils, and ultra-processed foods.
- Keep the tone practical, human, strong, and supportive.

Keep the plan practical, human, and realistic. Do not make it a generic diet calculator, macro calculator, keto meal planner, or medical app. Help me build a personal operating system for fasting.`;
}

function FormSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-limestone bg-white p-5 shadow-[0_18px_50px_rgba(8,119,216,0.07)] sm:p-7">
      <h3 className="font-display text-2xl font-black text-deepAegean">{title}</h3>
      <div className="mt-5 grid gap-5">{children}</div>
    </section>
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-black text-obsidian">
      {children}
    </label>
  );
}

function TextField({ id, label, value, placeholder, onChange }: FieldProps) {
  return (
    <div className="grid gap-2">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        placeholder={placeholder}
        className="w-full border border-limestone bg-marble px-4 py-3 text-base text-obsidian outline-none transition placeholder:text-obsidian/42 focus:border-aegean focus:bg-white focus:ring-2 focus:ring-aegean/18"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange
}: {
  id: keyof FormValues;
  label: string;
  value: string;
  options: string[];
  onChange: (id: keyof FormValues, value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        className="w-full border border-limestone bg-marble px-4 py-3 text-base text-obsidian outline-none transition focus:border-aegean focus:bg-white focus:ring-2 focus:ring-aegean/18"
      >
        <option value="">Choose one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ id, label, value, placeholder, onChange }: FieldProps) {
  return (
    <div className="grid gap-2">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        placeholder={placeholder}
        rows={4}
        className="min-h-28 w-full resize-y border border-limestone bg-marble px-4 py-3 text-base leading-7 text-obsidian outline-none transition placeholder:text-obsidian/42 focus:border-aegean focus:bg-white focus:ring-2 focus:ring-aegean/18"
      />
    </div>
  );
}

function CheckboxGroup({
  legend,
  options,
  selected,
  onChange
}: {
  legend: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  function toggle(option: string) {
    onChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
    );
  }

  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-black text-obsidian">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex min-h-12 items-center gap-3 border border-limestone bg-marble px-4 py-3 text-sm font-bold text-obsidian/80"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
              className="h-4 w-4 accent-aegean"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CopyButton({
  prompt,
  onCopied
}: {
  prompt: string;
  onCopied: () => void;
}) {
  async function copyPrompt() {
    if (!prompt) {
      return;
    }

    await navigator.clipboard.writeText(prompt);
    onCopied();
  }

  return (
    <button
      type="button"
      onClick={copyPrompt}
      className="bg-deepAegean px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-aegean"
    >
      Copy Prompt
    </button>
  );
}

function PromptOutput({
  prompt,
  copied,
  onCopy,
  onClear,
  onRegenerate
}: {
  prompt: string;
  copied: boolean;
  onCopy: () => void;
  onClear: () => void;
  onRegenerate: () => void;
}) {
  return (
    <section className="border border-aegean/18 bg-white p-5 shadow-temple sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-laurel">
            Your FastOS Prompt
          </p>
          <h2 className="mt-2 font-display text-3xl font-black text-obsidian sm:text-4xl">
            Copy it into your favorite AI.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-obsidian/72">
            Copy this FastOS prompt and paste it into any AI assistant. The
            prompt will instruct the AI to read the FastOS Method from My Big
            Greek Fasting first, then apply that method to your personal
            context. This is not a generic diet prompt. It is a personal fasting
            operating system.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-black leading-6 text-deepAegean">
            FastOS does not replace AI. FastOS teaches AI how to think about
            fasting.
          </p>
        </div>
        {copied ? (
          <p className="border border-aegean/20 bg-aegean/8 px-4 py-3 text-sm font-black text-deepAegean">
            Prompt copied.
          </p>
        ) : null}
      </div>
      <textarea
        readOnly
        value={prompt}
        aria-label="Generated FastOS prompt"
        className="mt-6 min-h-[28rem] w-full resize-y border border-limestone bg-marble p-4 font-mono text-sm leading-7 text-obsidian outline-none"
      />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <CopyButton prompt={prompt} onCopied={onCopy} />
        <button
          type="button"
          onClick={onClear}
          className="border border-deepAegean/35 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-deepAegean transition hover:bg-marble"
        >
          Clear Form
        </button>
        <button
          type="button"
          onClick={onRegenerate}
          className="border border-laurel/45 bg-laurel/10 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-obsidian transition hover:bg-laurel/18"
        >
          Regenerate Prompt
        </button>
      </div>
      <p className="mt-5 max-w-4xl text-xs leading-6 text-obsidian/58">
        This tool does not provide medical advice. Fasting may not be
        appropriate for everyone, especially people with medical conditions,
        pregnancy, eating disorder history, or medication requirements. Use
        professional judgment and seek qualified medical guidance when needed.
      </p>
    </section>
  );
}

export function FastOSBuilder() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const hasPrompt = prompt.length > 0;

  const answeredCount = useMemo(() => {
    return Object.values(values).filter((value) =>
      Array.isArray(value) ? value.length > 0 : value.trim().length > 0
    ).length;
  }, [values]);

  function updateValue(id: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    setCopied(false);
  }

  function updateFastingEffects(nextValues: string[]) {
    setValues((current) => ({ ...current, fastingEffects: nextValues }));
    setCopied(false);
  }

  function generatePrompt() {
    setPrompt(buildPrompt(values));
    setCopied(false);
    requestAnimationFrame(() => {
      document.getElementById("fastos-output")?.scrollIntoView({ block: "start" });
    });
  }

  function clearForm() {
    setValues(initialValues);
    setPrompt("");
    setCopied(false);
  }

  return (
    <main>
      <section className="marble-surface border-b border-aegean/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
              FastOS
            </p>
            <h1 className="font-display text-5xl font-black leading-[1.02] text-obsidian text-balance sm:text-7xl">
              Build your personal fasting prompt.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-obsidian/76 sm:text-xl">
              Your body is not a generic machine. Your fasting method should
              not be generic either. FastOS helps you create a prompt based on
              your real life, your food environment, your discipline level, and
              your goals.
            </p>
            <div className="mt-8">
              <a
                href="#prompt-builder"
                className="inline-flex bg-deepAegean px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-temple transition hover:bg-aegean"
              >
                Create My Prompt
              </a>
              <a
                href="/fastos-method"
                className="mt-4 inline-flex border border-deepAegean/35 bg-white/55 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-deepAegean transition hover:bg-white sm:ml-4 sm:mt-0"
              >
                Read FastOS Method
              </a>
            </div>
          </div>
          <div className="border border-aegean/14 bg-white/76 p-6 shadow-[0_24px_70px_rgba(8,119,216,0.13)] backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-laurel">
              Practical operating system
            </p>
            <p className="mt-4 font-display text-3xl font-black leading-tight text-deepAegean">
              Fasting, food, discipline, and ancestral health - adapted to your
              actual life.
            </p>
            <div className="greek-key mt-7 h-4 text-aegean/80" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-laurel">
                Better questions
              </p>
              <h2 className="mt-3 font-display text-4xl font-black text-obsidian text-balance">
                This is not a diet calculator.
              </h2>
              <p className="mt-5 text-lg leading-8 text-obsidian/74">
                FastOS does not give you a magic meal plan. It helps you ask
                better questions. It gives your favorite AI the context it needs
                to guide you with ancestral wisdom, carnivore discipline, and
                fasting freedom.
              </p>
              <p className="mt-5 text-base leading-7 text-obsidian/68">
                The{" "}
                <a href="/fastos-method" className="font-black text-deepAegean underline decoration-aegean/30 underline-offset-4 transition hover:text-aegean">
                  FastOS Method
                </a>{" "}
                is the source code. This generator is the command file.
              </p>
              <p className="mt-5 text-base leading-7 text-obsidian/68">
                Fill the form, generate your prompt, copy it, and paste it into
                your favorite AI: ChatGPT, Claude, Gemini, Grok, or any tool you
                like.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Step 1", "Fill the form"],
                ["Step 2", "Generate your prompt"],
                ["Step 3", "Copy it"],
                ["Step 4", "Paste it into your favorite AI"]
              ].map(([step, text]) => (
                <div key={step} className="border border-limestone bg-marble p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-aegean">
                    {step}
                  </p>
                  <p className="mt-2 text-lg font-black text-deepAegean">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="prompt-builder"
        className="bg-marble px-5 py-16 text-obsidian sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-laurel">
                Prompt Builder Form
              </p>
              <h2 className="mt-3 font-display text-4xl font-black text-obsidian">
                Tell FastOS what life really looks like.
              </h2>
            </div>
            <p className="text-sm font-black text-deepAegean">
              {answeredCount} sections answered
            </p>
          </div>

          <form
            className="grid gap-6"
            onSubmit={(event) => {
              event.preventDefault();
              generatePrompt();
            }}
          >
            <FormSection title="A. About You">
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  id="name"
                  label="Name or nickname"
                  value={values.name}
                  onChange={updateValue}
                />
                <SelectField
                  id="ageRange"
                  label="Age range"
                  value={values.ageRange}
                  options={ageRanges}
                  onChange={updateValue}
                />
              </div>
              <TextField
                id="country"
                label="Country / region"
                value={values.country}
                onChange={updateValue}
              />
              <TextAreaField
                id="schedule"
                label="Typical daily schedule"
                value={values.schedule}
                onChange={updateValue}
                placeholder="Example: office job, remote work, restaurant work, night shifts, travel often, retired, etc."
              />
            </FormSection>

            <FormSection title="B. Current Food Reality">
              <TextAreaField
                id="currentFood"
                label="What do you currently eat most often?"
                value={values.currentFood}
                onChange={updateValue}
              />
              <TextAreaField
                id="problemFoods"
                label="What foods create the most cravings or problems for you?"
                value={values.problemFoods}
                onChange={updateValue}
              />
              <TextAreaField
                id="ancestralFoods"
                label="What real ancestral foods are available where you live?"
                value={values.ancestralFoods}
                onChange={updateValue}
                placeholder="Example: beef, lamb, sardines, eggs, local cheese, seafood, horta, olive oil, etc."
              />
              <SelectField
                id="foodEnvironment"
                label="Food environment"
                value={values.foodEnvironment}
                options={foodEnvironments}
                onChange={updateValue}
              />
            </FormSection>

            <FormSection title="C. Fasting Experience">
              <SelectField
                id="fastingLevel"
                label="Current fasting level"
                value={values.fastingLevel}
                options={fastingLevels}
                onChange={updateValue}
              />
              <CheckboxGroup
                legend="What happens when you try to fast?"
                options={fastingEffects}
                selected={values.fastingEffects}
                onChange={updateFastingEffects}
              />
              <SelectField
                id="willpower"
                label="Do you rely mostly on willpower?"
                value={values.willpower}
                options={willpowerOptions}
                onChange={updateValue}
              />
            </FormSection>

            <FormSection title="D. Goals">
              <SelectField
                id="mainGoal"
                label="Main goal"
                value={values.mainGoal}
                options={goals}
                onChange={updateValue}
              />
              <TextAreaField
                id="fastingGift"
                label="What do you want fasting to give you?"
                value={values.fastingGift}
                onChange={updateValue}
              />
              <TextAreaField
                id="controlledBy"
                label="What do you want to stop being controlled by?"
                value={values.controlledBy}
                onChange={updateValue}
                placeholder="Example: sugar, bread, snacks, emotional eating, the clock, social pressure, fear of hunger."
              />
            </FormSection>

            <FormSection title="E. Constraints">
              <TextAreaField
                id="safetyNote"
                label="Medical / safety note"
                value={values.safetyNote}
                onChange={updateValue}
                placeholder="Optional: medications, health conditions, pregnancy, eating disorder history, or anything an AI should tell you to discuss with a qualified professional."
              />
              <TextAreaField
                id="lifestyleConstraints"
                label="Lifestyle constraints"
                value={values.lifestyleConstraints}
                onChange={updateValue}
                placeholder="Example: family dinners, work lunches, night shifts, travel, budget, food availability."
              />
            </FormSection>

            <FormSection title="F. Desired Style">
              <SelectField
                id="guideStyle"
                label="How should the AI guide you?"
                value={values.guideStyle}
                options={guideStyles}
                onChange={updateValue}
              />
              <SelectField
                id="preferredApproach"
                label="Preferred fasting approach"
                value={values.preferredApproach}
                options={preferredApproaches}
                onChange={updateValue}
              />
            </FormSection>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full bg-deepAegean px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-temple transition hover:bg-aegean sm:w-auto"
              >
                Generate My FastOS Prompt
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="fastos-output" className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {hasPrompt ? (
            <PromptOutput
              prompt={prompt}
              copied={copied}
              onCopy={() => setCopied(true)}
              onClear={clearForm}
              onRegenerate={generatePrompt}
            />
          ) : (
            <div className="border border-limestone bg-marble p-6 text-center sm:p-8">
              <p className="font-display text-3xl font-black text-deepAegean">
                Your FastOS Prompt will appear here.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-obsidian/68">
                Everything happens locally in your browser. No login, no API,
                no stored answers.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
