import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-laurel text-obsidian hover:bg-white hover:text-obsidian",
    secondary:
      "border border-deepAegean text-deepAegean hover:bg-deepAegean hover:text-white",
    light:
      "border border-white/32 text-white hover:border-white hover:bg-white hover:text-obsidian"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 py-3 text-center text-xs font-black uppercase tracking-[0.16em] transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
