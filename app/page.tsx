import "./globals.css";

import WorkExperience from "./components/WorkExperience";
import PullQuoteCarousel from "./components/PullQuoteCarousel";
import { workExperience, skills, interests, principles, pullQuotes } from "./data";
import { Outfit, Baskervville } from "next/font/google";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "300"
});

const baskervvilleFont = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: ['400', '600']
});


export default function Home() {
  return (
    <div className={`${outfitFont.className}`}>
      {/* Hero Section */}
      <section className="flex justify-center py-16 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-4xl text-center">
          <p className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8 leading-relaxed ${baskervvilleFont.className}`}>
            I am a creative software developer committed to clean code, robust architecture
            and bringing immense value to clients and colleagues alike.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              15+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Montreal, QC, Canada
            </span>
          </div>
        </div>
      </section>



      {/* Skills Section */}
      <section className="flex justify-center py-16 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8`}>
            {skills.map((skillCategory, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800' : 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800'}`}>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
                  {skillCategory.label}
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {skillCategory.items.map((skill, index) => { return (
                    <li key={`skill-${index}`}>{skill.label} <span className="lg:hidden xl:inline text-sm text-gray-500 dark:text-gray-400">{skill.years ? `(${skill.years} years)` : ''}</span></li>
                  )})}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex justify-center py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <WorkExperience
                key={index}
                {...job}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote Carousel */}
      <PullQuoteCarousel pullQuotes={pullQuotes} fontClassName={baskervvilleFont.className} />

      {/* Principles Section */}
      <section className="flex justify-center py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl w-full">
          <div className="space-y-16">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <h2 className={`text-xl md:text-xl lg:text-2xl text-gray-900 dark:text-white mb-4 ${baskervvilleFont.className}`}>
                  {principle.title}.
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Interests Section */}
      <section className="flex justify-center py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Computer Applications Programming</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Concordia University</p>
                  <p className="text-gray-600 dark:text-gray-400">Montreal, QC • 1999</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Social Sciences</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">John Abbott College</p>
                  <p className="text-gray-600 dark:text-gray-400">Montreal, QC • 1997</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Interests</h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span key={index} className="badge badge-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-0 shadow-md">
                    {interest.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  Spiral out, keep going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl w-full text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Asrar Abbasi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
