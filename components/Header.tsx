"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#efe4cd]/80 bg-white/88 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            className="focus-ring flex items-center gap-3 rounded-full"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#f7b731] text-lg font-black text-[#17223b] shadow-sm">
              芒
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black text-[#17223b] sm:text-base">
                {siteConfig.name}
              </span>
              <span className="block text-xs font-semibold text-[#667085]">
                {siteConfig.englishName}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-[#17223b] text-white shadow-sm"
                      : "text-[#475467] hover:bg-[#fff3cc] hover:text-[#17223b]"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "关闭导航菜单" : "打开导航菜单"}
            className="focus-ring inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#e9ddc3] bg-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-[#17223b] transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#17223b] transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#17223b] transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isOpen ? (
          <nav className="grid gap-2 border-t border-[#f1e7d5] py-4 md:hidden" aria-label="移动导航">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`focus-ring rounded-xl px-4 py-3 text-sm font-bold transition ${
                    active
                      ? "bg-[#17223b] text-white"
                      : "bg-white text-[#475467] hover:bg-[#fff3cc] hover:text-[#17223b]"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
