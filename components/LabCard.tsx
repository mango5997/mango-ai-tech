import Link from "next/link";
import { Tag } from "@/components/Tag";

type LabCardProps = {
  title: string;
  description: string;
  scenario: string;
  status: string;
  href: string;
};

export function LabCard({ title, description, scenario, status, href }: LabCardProps) {
  return (
    <Link
      className="focus-ring group flex h-full flex-col rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#72d79b] hover:shadow-xl hover:shadow-[#17223b]/8"
      href={href}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-[#eefaf2] text-lg font-black text-[#17663b]">
          AI
        </span>
        <Tag tone={status.includes("Demo") ? "green" : "mango"}>{status}</Tag>
      </div>
      <h3 className="text-lg font-black text-[#17223b] transition group-hover:text-[#17663b]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#667085]">{description}</p>
      <div className="mt-5 rounded-xl bg-[#f8fafc] p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#98a2b3]">适用场景</p>
        <p className="mt-2 text-sm leading-7 text-[#475467]">{scenario}</p>
      </div>
    </Link>
  );
}
