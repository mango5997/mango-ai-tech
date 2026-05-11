import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  tone?: "mango" | "blue" | "green" | "gray";
};

const toneClassName = {
  mango: "border-[#f6ca62] bg-[#fff3cc] text-[#7a4d00]",
  blue: "border-[#c8d6ff] bg-[#edf3ff] text-[#1f3f7a]",
  green: "border-[#bfe7d1] bg-[#eefaf2] text-[#17663b]",
  gray: "border-[#e4e7ec] bg-white text-[#475467]"
};

export function Tag({ children, tone = "gray" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClassName[tone]}`}
    >
      {children}
    </span>
  );
}
