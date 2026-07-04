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
    primary: "bg-deepAegean text-white shadow-temple hover:bg-aegean",
    secondary:
      "border border-deepAegean bg-white/70 text-deepAegean hover:bg-deepAegean hover:text-white",
    light:
      "border border-deepAegean bg-white/78 text-deepAegean hover:bg-deepAegean hover:text-white"
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
