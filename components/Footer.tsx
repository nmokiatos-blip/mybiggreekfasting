import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="marble-surface border-t border-aegean/15 px-5 py-12 text-obsidian sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-black text-deepAegean">{site.name}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-obsidian/72">
            Greek does not mean recipes. Greek means ancestral wisdom,
            simplicity, discipline, sun, sea, olive oil, fasting, and freedom.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-obsidian/72 sm:grid-cols-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-aegean">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-aegean/15 pt-6 text-xs uppercase tracking-[0.16em] text-obsidian/54">
        Personal education. Not medical advice.
      </div>
    </footer>
  );
}
