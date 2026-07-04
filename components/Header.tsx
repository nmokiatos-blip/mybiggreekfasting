import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-laurel/20 bg-[#061A26]/72 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-lg font-black leading-none text-marble transition hover:text-laurel sm:text-xl"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-white lg:flex"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-laurel">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/start-here"
          className="hidden border border-laurel/45 bg-[#061A26]/12 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-marble transition hover:bg-laurel/14 hover:text-laurel sm:inline-flex"
        >
          Start
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-3 overflow-x-auto px-5 py-3 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white lg:hidden"
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
