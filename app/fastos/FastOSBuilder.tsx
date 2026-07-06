"use client";

import {
  buildFastOSPrompt,
  type FastOSPromptValues
} from "@/lib/fastos-prompt";
import { useMemo, useState } from "react";

type FormValues = FastOSPromptValues;

type OptionFieldKey =
  | "schedule"
  | "currentFood"
  | "problemFoods"
  | "fastingGift"
  | "controlledBy"
  | "safetyNote"
  | "lifestyleConstraints";

type OptionFieldState = {
  selected: string[];
  other: string;
};

type OptionFieldsState = Record<OptionFieldKey, OptionFieldState>;

type FieldProps = {
  id: keyof FormValues;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (id: keyof FormValues, value: string) => void;
};

type HudField = {
  label: string;
  value: string | string[];
};

type HudSection = {
  letter: string;
  title: string;
  icon: string;
  fields: HudField[];
};

const initialValues: FormValues = {
  name: "",
  ageRange: "",
  country: "",
  schedule: "",
  currentFood: "",
  problemFoods: "",
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

const initialOptionFields: OptionFieldsState = {
  schedule: { selected: [], other: "" },
  currentFood: { selected: [], other: "" },
  problemFoods: { selected: [], other: "" },
  fastingGift: { selected: [], other: "" },
  controlledBy: { selected: [], other: "" },
  safetyNote: { selected: [], other: "" },
  lifestyleConstraints: { selected: [], other: "" }
};

const ageRanges = ["Under 25", "25-34", "35-44", "45-54", "55-64", "65+"];

const scheduleOptions = [
  "Office job",
  "Remote work",
  "Restaurant work",
  "Physical job",
  "Night shifts",
  "Travel often",
  "Retired",
  "Parent / family schedule",
  "Student",
  "Irregular schedule",
  "Early mornings",
  "Late nights",
  "Walks often",
  "Exercises regularly",
  "Mostly sedentary",
  "Social meals often"
];

const currentFoodOptions = [
  "Pasta",
  "Pizza",
  "Bread",
  "Rice",
  "Potatoes",
  "Burgers",
  "Fast food",
  "Sandwiches",
  "Sweets / desserts",
  "Sugar / desserts",
  "Chocolate",
  "Cookies / biscuits",
  "Breakfast cereal",
  "Fruit",
  "Yogurt",
  "Cheese",
  "Eggs",
  "Beef",
  "Lamb",
  "Pork",
  "Chicken",
  "Fish",
  "Sardines",
  "Seafood",
  "Processed meats",
  "Restaurant food",
  "Home-cooked meals",
  "Snacks",
  "Nuts",
  "Alcohol",
  "Sweet drinks",
  "Diet drinks",
  "Coffee",
  "Mineral water"
];

const problemFoodOptions = [
  "Sugar",
  "Bread",
  "Pasta",
  "Pizza",
  "Rice",
  "Potatoes / fries",
  "Chocolate",
  "Ice cream",
  "Pastries",
  "Cookies / biscuits",
  "Chips",
  "Nuts",
  "Cheese",
  "Alcohol",
  "Sweet drinks",
  "Diet soda",
  "Fruit",
  "Late-night snacks",
  "Fast food",
  "Restaurant bread basket",
  "Emotional eating",
  "Eating from boredom",
  "Eating from stress",
  "Social pressure",
  "Fear of hunger"
];

const fastingGiftOptions = [
  "Weight loss",
  "Less hunger",
  "Freedom from food noise",
  "More energy",
  "Mental clarity",
  "Better discipline",
  "Ketones",
  "Autophagy",
  "Metabolic flexibility",
  "Better control around food",
  "Less snacking",
  "Less sugar craving",
  "Simpler eating",
  "Emotional calm",
  "Confidence",
  "Better relationship with food",
  "Spiritual discipline",
  "Longevity",
  "Reset after food chaos",
  "Structure"
];

const controlledByOptions = [
  "Hunger",
  "Sugar",
  "Bread",
  "Pasta",
  "Pizza",
  "Snacks",
  "Emotional eating",
  "Night eating",
  "Restaurant food",
  "Social pressure",
  "The clock",
  "Breakfast habit",
  "Dessert habit",
  "Fear of hunger",
  "Boredom eating",
  "Stress eating",
  "Family pressure",
  "Alcohol",
  "Fast food",
  "Food delivery",
  "Diet culture",
  "Scale obsession"
];

const safetyNoteOptions = [
  "No known medical issue",
  "I take medication",
  "Blood pressure medication",
  "Diabetes / blood sugar issue",
  "Heart condition",
  "Kidney issue",
  "History of fainting",
  "History of eating disorder",
  "Pregnant / breastfeeding",
  "Underweight",
  "Digestive issues",
  "Medication must be taken with food",
  "Not sure / prefer to be cautious",
  "I will ask a qualified professional if needed"
];

const lifestyleConstraintOptions = [
  "Family dinners",
  "Work lunches",
  "Restaurant meals",
  "Travel",
  "Night shifts",
  "Irregular schedule",
  "Limited cooking",
  "Small kitchen",
  "Low budget",
  "Food availability",
  "Social pressure",
  "Eating with children",
  "Partner/family does not fast",
  "Business meals",
  "Late dinners",
  "Early breakfast meetings",
  "Gym / training schedule",
  "Stressful work",
  "Poor sleep",
  "Frequent celebrations",
  "Cultural food expectations"
];

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

function isAnswered(value: string | string[]) {
  return Array.isArray(value) ? value.length > 0 : value.trim().length > 0;
}

function hudValue(value: string | string[]) {
  if (!isAnswered(value)) {
    return "Missing";
  }

  return Array.isArray(value) ? value.join(", ") : value.trim();
}

function combineOptionsAndOther(selectedOptions: string[], otherText: string) {
  const selected = selectedOptions.join(", ");
  const other = otherText.trim();

  if (selected && other) {
    return `${selected}. Other: ${other}`;
  }

  return selected || other;
}

function FormSection({
  letter,
  icon,
  title,
  children
}: {
  letter: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="parchment-card border border-laurel/24 p-5 shadow-[0_18px_50px_rgba(11,61,92,0.08)] sm:p-7">
      <div className="mb-5 flex items-center gap-4 border-b border-laurel/18 pb-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-laurel/45 bg-deepAegean text-[0.62rem] font-black uppercase tracking-[0.1em] text-laurel">
          {icon}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-terracotta">
            Module {letter}
          </p>
          <h3 className="font-display text-2xl font-black text-deepAegean">{title}</h3>
        </div>
      </div>
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
        className="w-full border border-limestone bg-marble px-4 py-3 text-base text-obsidian outline-none transition placeholder:text-obsidian/42 focus:border-laurel focus:bg-white focus:ring-2 focus:ring-laurel/18"
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
        className="w-full border border-limestone bg-marble px-4 py-3 text-base text-obsidian outline-none transition focus:border-laurel focus:bg-white focus:ring-2 focus:ring-laurel/18"
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

function OptionSelectWithOther({
  groupId,
  label,
  helperText = "Choose all that apply, then add anything missing in Other.",
  options,
  selected,
  other,
  otherLabel,
  otherPlaceholder,
  onSelectedChange,
  onOtherChange
}: {
  groupId: string;
  label: string;
  helperText?: string;
  options: string[];
  selected: string[];
  other: string;
  otherLabel: string;
  otherPlaceholder?: string;
  onSelectedChange: (next: string[]) => void;
  onOtherChange: (next: string) => void;
}) {
  function toggleOption(option: string) {
    onSelectedChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
    );
  }

  return (
    <fieldset className="grid gap-4" data-option-group={groupId}>
      <div>
        <legend className="text-sm font-black text-obsidian">{label}</legend>
        {helperText ? (
          <p className="mt-1 text-sm leading-6 text-obsidian/62">{helperText}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleOption(option)}
              className={
                isSelected
                  ? "border border-laurel bg-laurel/18 px-4 py-2 text-sm font-black text-obsidian shadow-[0_8px_20px_rgba(205,152,60,0.18)] transition hover:bg-laurel/24"
                  : "border border-limestone bg-marble px-4 py-2 text-sm font-bold text-obsidian/76 shadow-[inset_0_-2px_0_rgba(23,23,23,0.04)] transition hover:border-laurel/55 hover:bg-white hover:text-deepAegean"
              }
            >
              {option}
            </button>
          );
        })}
      </div>

      <label className="grid gap-2 border border-laurel/16 bg-white/54 p-4">
        <span className="text-sm font-black text-obsidian">{otherLabel}</span>
        <textarea
          value={other}
          onChange={(event) => onOtherChange(event.target.value)}
          placeholder={otherPlaceholder}
          rows={3}
          className="min-h-24 w-full resize-y border border-limestone bg-marble px-4 py-3 text-base leading-7 text-obsidian outline-none transition placeholder:text-obsidian/42 focus:border-laurel focus:bg-white focus:ring-2 focus:ring-laurel/18"
        />
      </label>
    </fieldset>
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
            className={
              selected.includes(option)
                ? "flex min-h-12 items-center gap-3 border border-laurel bg-laurel/16 px-4 py-3 text-sm font-black text-obsidian shadow-[0_8px_20px_rgba(205,152,60,0.14)]"
                : "flex min-h-12 items-center gap-3 border border-limestone bg-marble px-4 py-3 text-sm font-bold text-obsidian/80 transition hover:border-laurel/55 hover:bg-white"
            }
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
              className="h-4 w-4 accent-laurel"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SectionHud({ sections }: { sections: HudSection[] }) {
  const totalFields = sections.reduce((total, section) => total + section.fields.length, 0);
  const completedFields = sections.reduce(
    (total, section) =>
      total + section.fields.filter((field) => isAnswered(field.value)).length,
    0
  );

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="border border-laurel/24 bg-white p-4 shadow-[0_18px_50px_rgba(11,61,92,0.08)] sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-laurel">
              Live HUD
            </p>
            <h3 className="mt-2 font-display text-2xl font-black text-deepAegean">
              What FastOS knows
            </h3>
          </div>
          <p className="shrink-0 border border-laurel/30 bg-laurel/10 px-3 py-2 text-xs font-black text-deepAegean">
            {completedFields}/{totalFields}
          </p>
        </div>

        <div className="mt-4 h-2 bg-marble" aria-hidden="true">
          <div
            className="h-full bg-laurel transition-all"
            style={{ width: `${Math.round((completedFields / totalFields) * 100)}%` }}
          />
        </div>

        <div className="mt-5 grid gap-3">
          {sections.map((section) => {
            const answered = section.fields.filter((field) => isAnswered(field.value)).length;
            const missing = section.fields.length - answered;

            return (
              <section key={section.letter} className="border border-limestone bg-marble p-3">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-black text-deepAegean">
                    <span className="mr-2 text-laurel">{section.icon}</span>
                    {section.letter}. {section.title}
                  </h4>
                  <span
                    className={
                      missing === 0
                        ? "shrink-0 text-xs font-black text-laurel"
                        : "shrink-0 text-xs font-black text-obsidian/58"
                    }
                  >
                    {missing === 0 ? "Complete" : `${missing} missing`}
                  </span>
                </div>
                <dl className="mt-3 grid gap-2">
                  {section.fields.map((field) => {
                    const answeredField = isAnswered(field.value);

                    return (
                      <div key={field.label} className="grid gap-1">
                        <dt className="text-[11px] font-black uppercase tracking-[0.14em] text-obsidian/48">
                          {field.label}
                        </dt>
                        <dd
                          className={
                            answeredField
                              ? "line-clamp-2 text-sm font-bold leading-5 text-obsidian"
                              : "text-sm font-black leading-5 text-aegean"
                          }
                        >
                          {hudValue(field.value)}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            );
          })}
        </div>
      </div>
    </aside>
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
  const [optionFields, setOptionFields] = useState<OptionFieldsState>(initialOptionFields);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const hasPrompt = prompt.length > 0;

  const hudSections = useMemo<HudSection[]>(
    () => [
      {
        letter: "A",
        title: "About You",
        icon: "ID",
        fields: [
          { label: "Name", value: values.name },
          { label: "Age", value: values.ageRange },
          { label: "Region", value: values.country },
          { label: "Schedule", value: values.schedule }
        ]
      },
      {
        letter: "B",
        title: "Food Reality",
        icon: "Fish",
        fields: [
          { label: "Often eats", value: values.currentFood },
          { label: "Problem foods", value: values.problemFoods },
          { label: "Environment", value: values.foodEnvironment }
        ]
      },
      {
        letter: "C",
        title: "Fasting",
        icon: "Hour",
        fields: [
          { label: "Level", value: values.fastingLevel },
          { label: "Effects", value: values.fastingEffects },
          { label: "Willpower", value: values.willpower }
        ]
      },
      {
        letter: "D",
        title: "Goals",
        icon: "Peak",
        fields: [
          { label: "Main goal", value: values.mainGoal },
          { label: "Fasting gift", value: values.fastingGift },
          { label: "Controlled by", value: values.controlledBy }
        ]
      },
      {
        letter: "E",
        title: "Constraints",
        icon: "Shield",
        fields: [
          { label: "Safety", value: values.safetyNote },
          { label: "Lifestyle", value: values.lifestyleConstraints }
        ]
      },
      {
        letter: "F",
        title: "Style",
        icon: "Map",
        fields: [
          { label: "Guide style", value: values.guideStyle },
          { label: "Approach", value: values.preferredApproach }
        ]
      }
    ],
    [values]
  );

  const answeredCount = useMemo(
    () =>
      hudSections.reduce(
        (total, section) =>
          total + section.fields.filter((field) => isAnswered(field.value)).length,
        0
      ),
    [hudSections]
  );

  function updateValue(id: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    setCopied(false);
  }

  function updateOptionField(
    id: OptionFieldKey,
    nextPartial: Partial<OptionFieldState>
  ) {
    const nextState = {
      ...optionFields[id],
      ...nextPartial
    };
    const combined = combineOptionsAndOther(nextState.selected, nextState.other);

    setOptionFields((current) => ({
      ...current,
      [id]: nextState
    }));
    setValues((currentValues) => ({ ...currentValues, [id]: combined }));
    setCopied(false);
  }

  function updateFastingEffects(nextValues: string[]) {
    setValues((current) => ({ ...current, fastingEffects: nextValues }));
    setCopied(false);
  }

  function generatePrompt() {
    setPrompt(buildFastOSPrompt(values));
    setCopied(false);
    requestAnimationFrame(() => {
      document.getElementById("fastos-output")?.scrollIntoView({ block: "start" });
    });
  }

  function clearForm() {
    setValues(initialValues);
    setOptionFields(initialOptionFields);
    setPrompt("");
    setCopied(false);
  }

  return (
    <main>
      <section className="aegean-surface border-b border-laurel/25 px-5 pb-16 pt-32 text-marble sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-laurel">
              FastOS
            </p>
            <h1 className="font-display text-5xl font-black leading-[1.02] text-marble text-balance sm:text-7xl">
              Build your personal fasting prompt.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-marble/76 sm:text-xl">
              Your body is not a generic machine. Your fasting method should
              not be generic either. FastOS helps you create a prompt based on
              your real life, your food environment, your discipline level, and
              your goals.
            </p>
            <div className="mt-8">
              <a
                href="#prompt-builder"
                className="inline-flex bg-laurel px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-obsidian shadow-temple transition hover:bg-marble"
              >
                Create My Prompt
              </a>
              <a
                href="/fastos-method"
                className="mt-4 inline-flex border border-laurel/45 bg-white/[0.06] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-marble transition hover:bg-white/12 sm:ml-4 sm:mt-0"
              >
                Read FastOS Method
              </a>
            </div>
          </div>
          <div className="border border-laurel/28 bg-white/[0.055] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-laurel">
              Practical operating system
            </p>
            <p className="mt-4 font-display text-3xl font-black leading-tight text-marble">
              Fasting, food, discipline, and ancestral health - adapted to your
              actual life.
            </p>
            <div className="greek-meander mt-7 h-4 text-laurel/80" aria-hidden="true" />
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
              <div className="mt-6 border border-aegean/18 bg-marble p-4 text-sm leading-6 text-obsidian/72">
                <p>
                  If your AI cannot access the method page, use this plain text
                  version:{" "}
                  <a
                    href="/fastos-method.txt"
                    className="font-black text-deepAegean underline decoration-aegean/30 underline-offset-4 transition hover:text-aegean"
                  >
                    /fastos-method.txt
                  </a>
                </p>
              </div>
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
              {answeredCount} answers filled
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
            <SectionHud sections={hudSections} />

            <form
              className="grid gap-6"
              onSubmit={(event) => {
                event.preventDefault();
                generatePrompt();
              }}
            >
              <FormSection letter="A" icon="ID" title="About You">
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
                <OptionSelectWithOther
                  groupId="schedule"
                  label="Typical daily schedule"
                  options={scheduleOptions}
                  selected={optionFields.schedule.selected}
                  other={optionFields.schedule.other}
                  otherLabel="Other schedule details"
                  otherPlaceholder="Example: I work from home, walk daily, eat late with family, travel twice a month."
                  onSelectedChange={(selected) =>
                    updateOptionField("schedule", { selected })
                  }
                  onOtherChange={(other) => updateOptionField("schedule", { other })}
                />
              </FormSection>

              <FormSection letter="B" icon="Fish" title="Current Food Reality">
                <OptionSelectWithOther
                  groupId="current-food"
                  label="What do you currently eat most often?"
                  options={currentFoodOptions}
                  selected={optionFields.currentFood.selected}
                  other={optionFields.currentFood.other}
                  otherLabel="Other foods you eat often"
                  otherPlaceholder="Example: croissants, ice cream, kebab, tacos, charcuterie, pastries."
                  onSelectedChange={(selected) =>
                    updateOptionField("currentFood", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("currentFood", { other })
                  }
                />
                <OptionSelectWithOther
                  groupId="problem-foods"
                  label="What foods create the most cravings or problems for you?"
                  options={problemFoodOptions}
                  selected={optionFields.problemFoods.selected}
                  other={optionFields.problemFoods.other}
                  otherLabel="Other craving/problem foods"
                  otherPlaceholder="Example: I cannot stop once I start eating bread at restaurants."
                  onSelectedChange={(selected) =>
                    updateOptionField("problemFoods", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("problemFoods", { other })
                  }
                />
                <SelectField
                  id="foodEnvironment"
                  label="Food environment"
                  value={values.foodEnvironment}
                  options={foodEnvironments}
                  onChange={updateValue}
                />
              </FormSection>

              <FormSection letter="C" icon="Hour" title="Fasting Experience">
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

              <FormSection letter="D" icon="Peak" title="Goals">
                <SelectField
                  id="mainGoal"
                  label="Main goal"
                  value={values.mainGoal}
                  options={goals}
                  onChange={updateValue}
                />
                <OptionSelectWithOther
                  groupId="fasting-gift"
                  label="What do you want fasting to give you?"
                  options={fastingGiftOptions}
                  selected={optionFields.fastingGift.selected}
                  other={optionFields.fastingGift.other}
                  otherLabel="Other fasting goals"
                  otherPlaceholder="Example: I want to stop thinking about food all day."
                  onSelectedChange={(selected) =>
                    updateOptionField("fastingGift", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("fastingGift", { other })
                  }
                />
                <OptionSelectWithOther
                  groupId="controlled-by"
                  label="What do you want to stop being controlled by?"
                  options={controlledByOptions}
                  selected={optionFields.controlledBy.selected}
                  other={optionFields.controlledBy.other}
                  otherLabel="Other things controlling you"
                  otherPlaceholder="Example: I want to stop eating because everyone else is eating."
                  onSelectedChange={(selected) =>
                    updateOptionField("controlledBy", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("controlledBy", { other })
                  }
                />
              </FormSection>

              <FormSection letter="E" icon="Shield" title="Constraints">
                <OptionSelectWithOther
                  groupId="safety-note"
                  label="Medical / safety note"
                  helperText="Choose any caution notes that apply. This is not diagnosis or medical advice."
                  options={safetyNoteOptions}
                  selected={optionFields.safetyNote.selected}
                  other={optionFields.safetyNote.other}
                  otherLabel="Other medical or safety note"
                  otherPlaceholder="Optional: medications, health conditions, pregnancy, eating disorder history, or anything an AI should tell you to discuss with a qualified professional."
                  onSelectedChange={(selected) =>
                    updateOptionField("safetyNote", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("safetyNote", { other })
                  }
                />
                <OptionSelectWithOther
                  groupId="lifestyle-constraints"
                  label="Lifestyle constraints"
                  options={lifestyleConstraintOptions}
                  selected={optionFields.lifestyleConstraints.selected}
                  other={optionFields.lifestyleConstraints.other}
                  otherLabel="Other lifestyle constraints"
                  otherPlaceholder="Example: I eat with my family every night at 9 PM and travel for work."
                  onSelectedChange={(selected) =>
                    updateOptionField("lifestyleConstraints", { selected })
                  }
                  onOtherChange={(other) =>
                    updateOptionField("lifestyleConstraints", { other })
                  }
                />
              </FormSection>

              <FormSection letter="F" icon="Map" title="Desired Style">
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

      <section className="bg-marble px-5 py-10 text-obsidian sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl border border-aegean/16 bg-white p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-laurel">
            AI/debug sources
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-deepAegean">
            {[
              ["FastOS Method", "/fastos-method"],
              ["AI-readable Method", "/fastos-method-ai"],
              ["Markdown Method", "/fastos-method.md"],
              ["Plain Text Method", "/fastos-method.txt"],
              ["Prompt Template", "/fastos-prompt-template.txt"],
              ["Sample Generated Prompt", "/fastos-prompt-sample.txt"]
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="underline decoration-aegean/30 underline-offset-4 transition hover:text-aegean"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
