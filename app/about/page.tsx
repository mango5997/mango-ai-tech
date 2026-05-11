import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解芒果AI科技的建立初衷、内容方向和实验计划。"
};

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionTitle
          description="一个个人 AI 品牌站，也是一间持续迭代的产品观察室和工具实验室。"
          eyebrow="About"
          title="关于芒果AI科技"
        />
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-2xl border border-[#ece3d3] bg-white p-6 shadow-sm">
            <div className="grid size-14 place-items-center rounded-2xl bg-[#f7b731] text-2xl font-black text-[#17223b]">
              芒
            </div>
            <h2 className="mt-5 text-2xl font-black text-[#17223b]">Mango AI Tech</h2>
            <p className="mt-3 text-sm leading-7 text-[#667085]">
              发现有意思的 AI，拆解能落地的科技。
            </p>
          </aside>

          <article className="rounded-2xl border border-[#ece3d3] bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-5 text-base leading-8 text-[#475467]">
              <p>
                芒果AI科技是一个面向 AI 爱好者、产品经理和技术实践者的前沿观察与实验网站。
                它关注 AI 正在发生什么、为什么重要、如何使用，以及如何转化为真实的产品和业务价值。
              </p>
              <p>
                我希望它不是单纯的新闻搬运站，而是一个能帮助自己和读者持续建立判断力的地方：
                看到一个新模型，要问它改变了什么；看到一个新工具，要问它解决了谁的问题；
                做一个小实验，要问它离真实场景还有多远。
              </p>
              <p>
                第一版会从三件事开始：整理 AI 前沿动态，拆解关键技术和产品架构，把一些想法做成可体验的实验 Demo。
                内容会保持克制，不追求浮夸表达，更重视清晰、真实和可复用。
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex justify-center rounded-full bg-[#17223b] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
                href="/frontier"
              >
                看 AI 前沿
              </Link>
              <Link
                className="focus-ring inline-flex justify-center rounded-full border border-[#f1cf77] bg-white px-5 py-3 text-sm font-black text-[#7a4d00] transition hover:-translate-y-0.5 hover:bg-[#fff8e8]"
                href="/lab"
              >
                进入实验室
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
