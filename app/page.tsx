import "./globals.css";

import WorkExperience from "./components/WorkExperience";
import PullQuoteCarousel from "./components/PullQuoteCarousel";
import { workExperience, principles, pullQuotes } from "./data";

const topSkills = [
  { title: "PHP", detail: "Drupal, Laravel" },
  { title: "TypeScript", detail: "React, Next.js" },
  { title: "DB", detail: "MySQL, SQL Server" },
  { title: "AWS", detail: "EC2, RDS, S3, Route53" },
  { title: "DevOps", detail: "Linux, Docker, CI/CD" },
];

const education = [
  { program: "Computer Applications Programming", school: "Concordia University", location: "Montreal, QC", year: "1999" },
  { program: "Social Sciences", school: "John Abbott College", location: "Montreal, QC", year: "1997" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="max-w-[1100px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.7fr_0.7fr] gap-10 md:gap-16 items-start pt-14 pb-20 md:pt-24">
        <div>
          <h1 className="font-display text-[clamp(40px,6vw,68px)] leading-[1.06] text-[var(--c-fg)] mb-6 text-pretty">
            Spiral out.
          </h1>
          <p className="text-[19px] leading-[1.7] text-[var(--c-muted)] max-w-[56ch] mb-8 text-pretty">
            Growth is never a straight line. It&rsquo;s a spiral, circling back to the same problems with a
            wider understanding each time. Iteration allows us the opportunity to explore
            and to keep learning. That&rsquo;s how I&rsquo;ve spent my
            career — seeking better solutions, gaining sharper instincts and challenging the status quo.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-9">
            <a href="#experience" className="font-code bg-[var(--c-accent)] hover:bg-[var(--c-accent-hover)] text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors">
              See my work
            </a>
            <a href="#contact" className="font-code border-[1.5px] border-[var(--c-border)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] text-[var(--c-fg)] px-7 py-3 rounded-lg font-semibold text-sm transition-colors">
              Spiral Out
            </a>
          </div>
          <div className="flex flex-wrap gap-4 font-code text-[13px] text-[var(--c-muted)]">
            <span>15+ years experience</span>
            <span>·</span>
            <span>Montreal, QC, Canada</span>
          </div>
        </div>

        <div className="pt-2.5">
          <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-4">Top Skills</div>
          <div className="flex flex-col">
            {topSkills.map((skill, index) => (
              <div key={index} className="flex items-baseline gap-3 py-3.5 border-b border-[var(--c-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] flex-shrink-0 self-center" />
                <span className="font-display text-[19px] text-[var(--c-fg)]">{skill.title}</span>
                {skill.detail && (
                  <span className="font-code text-[13px] text-[var(--c-muted)] md:hidden lg:inline">{skill.detail}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="bg-[var(--c-bg-alt)] px-6 md:px-10 py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-4">01 / Engineering Mindset</div>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] text-[var(--c-fg)] mb-12">Principles I adhere to</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-[var(--c-border)] border border-[var(--c-border)]">
            {principles.map((principle, index) => (
              <div key={index} className="bg-[var(--c-bg)] p-8">
                <div className="font-code text-[32px] font-semibold text-[var(--c-accent-soft)] mb-3.5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg text-[var(--c-fg)] mb-2.5">{principle.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--c-muted)]">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-4">02 / Experience</div>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] text-[var(--c-fg)] mb-12">Professional Experience</h2>
        {workExperience.map((job, index) => (
          <WorkExperience key={index} {...job} />
        ))}
      </section>

      {/* Testimonials carousel */}
      <PullQuoteCarousel pullQuotes={pullQuotes} />

      {/* Education */}
      <section id="education" className="max-w-[1100px] mx-auto px-6 md:px-10 py-24">
        <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-4">03 / Education</div>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] text-[var(--c-fg)] mb-10">Education</h2>
        <div className="flex flex-col gap-5">
          {education.map((ed, index) => (
            <div key={index} className="flex flex-wrap justify-between gap-2 border-b border-[var(--c-border)] pb-5">
              <div>
                <div className="font-display text-[17px] text-[var(--c-fg)]">{ed.program}</div>
                <div className="text-sm text-[var(--c-muted)] mt-1">{ed.school} · {ed.location}</div>
              </div>
              <div className="font-code text-[13px] text-[var(--c-muted)]">{ed.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[var(--c-panel-bg)] px-6 md:px-10 pt-24 pb-16">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-4">04 / Contact</div>
          <h2 className="font-display text-[clamp(30px,5vw,44px)] text-[var(--c-panel-fg)] mb-5">Let&rsquo;s build something.</h2>
          <p className="text-[17px] leading-[1.7] text-[var(--c-panel-muted)] mb-7">
            Open to interesting problems, good teams, and the occasional chess challenge.
          </p>
          <a href="mailto:asrar.ca@gmail.com" className="font-code text-lg font-semibold text-[var(--c-accent)] hover:underline inline-block mb-9">
            asrar.ca@gmail.com
          </a>

          <div className="flex justify-center gap-3 mb-11">
            <a href="https://github.com/asrarca" target="_blank" rel="noopener" aria-label="GitHub" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-[var(--c-panel-fg)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-colors">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/asrarabbasi" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-[var(--c-panel-fg)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-colors">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>

          <div className="border border-white/25 border-l-[3px] border-l-[var(--c-accent)] rounded-r-lg px-[22px] py-[18px] text-left mb-14">
            <p className="text-sm leading-relaxed text-[var(--c-panel-muted)]">
              Running a business and need PHP or Drupal expertise? Visit{" "}
              <a href="https://phpconsulting.ca" target="_blank" rel="noopener" className="text-[var(--c-accent)] hover:underline">phpconsulting.ca</a>{" "}
              for consulting services.
            </p>
          </div>

          <p className="font-display italic text-sm text-[var(--c-panel-muted)] mb-3">Spiral out. Keep going.</p>
          <p className="font-code text-[11px] text-white/45">
            &copy; {new Date().getFullYear()} Asrar Abbasi. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
