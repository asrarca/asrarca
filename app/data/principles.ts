import type { Principle } from "./types";

export const principles: Principle[] = [
  {
    title: "Don't Repeat Yourself",
    description:
      "Write code once, reuse it everywhere. If you're writing the same code in two different places, you're doing it wrong. Duplication is the root of all evil.",
  },
  {
    title: "Keep It Simple",
    description:
      "Don't over-engineer something if a simple array does the job. Aim for elegance through simplicity, not cleverness.",
  },
  {
    title: "Start with the End in Mind",
    description:
      "I ask myself: 'What do I want the final code to look like?' and work backwards from there. The code should be self-explanatory such that other developers can understand without documentation.",
  },
  {
    title: "Favour Convention over Configuration",
    description:
      "I like systems that 'just work' as long as you follow the conventions. Embrace patterns and watch productivity of all developers increase.",
  },
  {
    title: "Everything is Possible",
    description: "'That's not possible' doesn't exist in my vocabulary. With enough creativity and effort, any problem can be solved.",
  },
  {
    title: "Stay Humble",
    description: "I have been blessed to brush shoulders with amazing developers. No matter how much I know, there's always more to learn.",
  },
];
