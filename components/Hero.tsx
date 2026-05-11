import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-[#f0e2c5]">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-[#f6ca62] bg-[#fff3cc] px-3 py-1 text-sm font-bold text-[#7a4d00]">
            个人AI品牌站 · 前沿解读 · 工具实验室
          </p>
          <h1 className="text-4xl font-black leading-tight text-[#17223b] sm:text-5xl lg:text-6xl">
            芒果AI科技
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#344054]">
            {siteConfig.description}
          </p>
          <p className="mt-3 text-lg font-bold text-[#e58e26]">{siteConfig.slogan}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex items-center justify-center rounded-full bg-[#17223b] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#17223b]/15 transition hover:-translate-y-0.5 hover:bg-[#10182d]"
              href="/frontier"
            >
              查看最新内容
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center rounded-full border border-[#f1cf77] bg-white px-6 py-3 text-sm font-black text-[#7a4d00] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f7b731] hover:bg-[#fff8e8]"
              href="/lab"
            >
              进入AI实验室
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-[#17223b]/8" />
          <Image
            alt="Mango AI Tech 的轻科技产品实验视觉"
            className="relative aspect-[16/10] w-full rounded-[1.5rem] border border-white object-cover shadow-2xl shadow-[#17223b]/14"
            height={941}
            priority
            src="/mango-ai-hero.png"
            width={1672}
          />
        </div>
      </Container>
    </section>
  );
}
