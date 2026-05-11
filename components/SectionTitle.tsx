import Link from "next/link";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#e58e26]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-black text-[#17223b] sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-[#667085]">{description}</p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Link
          className="focus-ring inline-flex w-fit items-center justify-center rounded-full border border-[#eadfbf] bg-white px-4 py-2 text-sm font-bold text-[#17223b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f7b731] hover:text-[#9a5d00]"
          href={actionHref}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
