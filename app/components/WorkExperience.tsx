import type { WorkExperienceItem } from "../data";
import JobTestimonials from "./JobTestimonials";

export default function WorkExperience({
  title,
  company,
  companyUrl,
  period,
  technologies,
  responsibilities,
  testimonials,
}: WorkExperienceItem) {

  return (
    <div className="relative pl-8 border-l-2 border-[var(--c-border)] pb-14 last:pb-0">
      <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[var(--c-accent)] border-[3px] border-[var(--c-bg)]" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
        <a href={companyUrl} target="_blank" rel="noopener" className="font-display text-[26px] text-[var(--c-fg)] hover:text-[var(--c-accent)] transition-colors">{company}</a>
      </div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10">
        {/* Left — description paragraphs */}
        <div className="flex flex-col gap-4">
          <div className="font-code text-[14px] text-[var(--c-accent)]">
            <span className="font-semibold ">{title}</span>
            <span className="ml-3 font-code text-xs text-[var(--c-muted)] whitespace-nowrap">{period}</span>
          </div>

          {responsibilities.map((paragraph, index) => (
            <p key={index} className="text-[16px] leading-relaxed text-[var(--c-muted)] max-w-[68ch]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right — skills + testimonials */}
        <div className="flex flex-col gap-6">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

          {testimonials && testimonials.length > 0 && (
            <JobTestimonials testimonials={testimonials} />
          )}
        </div>
      </div>
    </div>
  );
}
