import Image from "next/image";
import type { App } from "../data";

export default function AppCard({
  name,
  url,
  icon,
  tagline,
  description,
  technologies,
}: App) {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group flex flex-col items-center text-center max-w-[460px] rounded-2xl border border-[var(--c-border)] px-8 py-10"
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={112}
        height={112}
        className="w-[112px] h-[112px] rounded-[24px] shadow-md ring-1 ring-black/10"
      />
      <h3 className="font-display text-2xl text-[var(--c-fg)] mt-6 group-hover:text-[var(--c-accent)] transition-colors">{name}</h3>
      <div className="text-[13px] text-[var(--c-muted)] mt-1.5">{tagline}</div>
      <p className="text-[15px] leading-relaxed text-[var(--c-muted)] mt-4 text-pretty">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="font-code text-[11px] text-[var(--c-muted)] border border-[var(--c-border)] px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <span className="font-code text-[13px] font-semibold text-[var(--c-accent)] mt-7 group-hover:underline">
        {url.replace(/^https?:\/\//, "")} &rarr;
      </span>
    </a>
  );
}
