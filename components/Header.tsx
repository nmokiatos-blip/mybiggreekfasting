import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-obsidian/10 bg-marble/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg font-black leading-none text-deepAegean sm:text-xl"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-obsidian/72 lg:flex"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-deepAegean">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/start-here"
          className="hidden bg-deepAegean px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-obsidian sm:inline-flex"
        >
          Start
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-3 overflow-x-auto border-t border-obsidian/10 px-5 py-3 text-[0.7rem] font-black uppercase tracking-[0.12em] text-obsidian/72 lg:hidden"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
