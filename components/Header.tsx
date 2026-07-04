import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg font-black leading-none text-deepAegean drop-shadow-[0_1px_0_rgba(255,255,255,0.75)] sm:text-xl"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-obsidian/72 drop-shadow-[0_1px_0_rgba(255,255,255,0.72)] lg:flex"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-deepAegean">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/start-here"
          className="hidden border border-deepAegean/45 bg-transparent px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-deepAegean transition hover:bg-white/35 sm:inline-flex"
        >
          Start
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-3 overflow-x-auto bg-transparent px-5 py-3 text-[0.7rem] font-black uppercase tracking-[0.12em] text-obsidian/78 drop-shadow-[0_1px_0_rgba(255,255,255,0.72)] lg:hidden"
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
