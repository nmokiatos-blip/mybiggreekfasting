type SectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  surface?: "plain" | "marble" | "white";
};

export function Section({
  eyebrow,
  title,
  children,
  dark = false,
  surface = "plain"
}: SectionProps) {
  const surfaceClass = dark
    ? "bg-obsidian text-marble"
    : surface === "marble"
      ? "marble-surface text-obsidian"
      : surface === "white"
        ? "bg-white text-obsidian"
        : "text-obsidian";

  return (
    <section className={`px-5 py-20 sm:px-8 lg:px-12 ${surfaceClass}`}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          {eyebrow ? (
            <p
              className={`mb-4 text-xs font-black uppercase tracking-[0.26em] ${
                dark ? "text-laurel" : "text-deepAegean"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-black leading-tight text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-balance sm:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}
