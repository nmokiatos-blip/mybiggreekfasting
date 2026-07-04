import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primary?: {
    href: string;
    label: string;
  };
  secondary?: {
    href: string;
    label: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  body,
  primary,
  secondary
}: PageHeroProps) {
  return (
    <section className="marble-surface border-b border-aegean/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-deepAegean">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-4xl font-black leading-[1.02] text-obsidian text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-obsidian/74 sm:text-xl">
          {body}
        </p>
        {primary || secondary ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primary ? <ButtonLink href={primary.href}>{primary.label}</ButtonLink> : null}
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
