import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { LabCard } from "@/components/LabCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getLatestPosts } from "@/lib/posts";
import { labItems } from "@/lib/site";

const capabilityCards = [
  {
    title: "发现有意思的AI前沿",
    description: "过滤信息噪音，关注真正值得跟进的模型、产品、工具和开源项目。",
    accent: "bg-[#fff3cc] text-[#7a4d00]"
  },
  {
    title: "用产品经理视角拆解",
    description: "不只看技术参数，更关心用户场景、商业价值、产品路径和落地边界。",
    accent: "bg-[#edf3ff] text-[#1f3f7a]"
  },
  {
    title: "把想法做成可体验的AI实验",
    description: "用 Dify、Docker、大模型 API 和自动化工作流，把判断变成可玩的 Demo。",
    accent: "bg-[#eefaf2] text-[#17663b]"
  }
];

export default function HomePage() {
  const latestPosts = getLatestPosts(4);

  return (
    <>
      <Hero />

      <section className="py-14 sm:py-16">
        <Container>
          <SectionTitle
            description="这不是一个单纯追热点的资讯站，而是把 AI 变化翻译成产品机会、技术判断和可落地实验的个人品牌站。"
            eyebrow="What I Do"
            title="三个核心能力"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {capabilityCards.map((card, index) => (
              <article
                className="rounded-2xl border border-[#ece3d3] bg-white p-6 shadow-sm"
                key={card.title}
              >
                <span
                  className={`grid size-11 place-items-center rounded-xl text-base font-black ${card.accent}`}
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black text-[#17223b]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionTitle
            actionHref="/frontier"
            actionLabel="全部文章"
            description="先从示例内容开始，后续可以持续扩展为 AI 前沿观察、原理拆解和实验复盘。"
            eyebrow="Latest"
            title="最新文章"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionTitle
            actionHref="/lab"
            actionLabel="进入AI实验室"
            description="第一版先静态展示实验方向，后续可逐步接入真实 API、工作流和可交互 Demo。"
            eyebrow="Lab"
            title="AI实验室入口"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {labItems.map((item) => (
              <LabCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#17223b] py-14 text-white sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7b731]">
                Positioning
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">网站定位说明</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
              <p className="text-base leading-8 text-[#e5e7eb]">
                芒果AI科技面向 AI 爱好者、产品经理和技术实践者，关注 AI
                正在发生什么、为什么重要、如何使用，以及如何转化为真实的产品和业务价值。
                我会用产品经理的视角筛选趋势，用工程实践验证想法，让前沿内容更接近真实落地。
              </p>
              <Link
                className="focus-ring mt-6 inline-flex rounded-full bg-[#f7b731] px-5 py-3 text-sm font-black text-[#17223b] transition hover:-translate-y-0.5 hover:bg-[#ffd56b]"
                href="/about"
              >
                了解芒果AI科技
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
