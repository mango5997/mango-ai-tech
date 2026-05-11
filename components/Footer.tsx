import Link from "next/link";
import { Container } from "@/components/Container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#eadfca] bg-[#17223b] text-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#f7b731] font-black text-[#17223b]">
                芒
              </span>
              <div>
                <p className="font-black">{siteConfig.title}</p>
                <p className="mt-1 text-sm text-[#cbd5e1]">{siteConfig.slogan}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#cbd5e1]">
              一个面向 AI 爱好者、产品经理和技术实践者的前沿观察与实验网站。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {navItems.map((item) => (
              <Link
                className="focus-ring rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-[#e5e7eb] transition hover:border-[#f7b731] hover:text-[#f7b731]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[#b9c2d0] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mango AI Tech. All rights reserved.</p>
          <p>Built for static-first publishing and fast AI experiments.</p>
        </div>
      </Container>
    </footer>
  );
}
