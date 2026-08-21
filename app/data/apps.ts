import type { App } from "./types";

export const apps: App[] = [
  {
    name: "Quran 13",
    url: "https://quran13.asrar.ca",
    icon: "/images/quran13-logo.jpg",
    tagline: "Quran reader app with AI tools",
    description:
      "A Quran reader that shows high-quality mushaf page images with AI search. Describe an ayah in plain language or recite it out loud and it jumps straight to the page, highlighted in place. Adds swipe navigation, translations, line highlights, bookmarks, rakat markers, three themes, and eight UI languages.",
    technologies: ["Next.js", "React", "Tailwind CSS", "PWA"],
  },
];
