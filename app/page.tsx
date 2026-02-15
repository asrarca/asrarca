import "./globals.css";

import WorkExperience from "./components/WorkExperience";
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

  const workExperience = [
    {
      title: "Backend Developer",
      company: "Nurun",
      companyLogo: 'M12.9594 35.6399V30.1679L10.8444 32.2829C9.87237 33.2549 8.53137 33.8129 7.15437 33.8129C5.86737 33.8129 4.65237 33.3359 3.73437 32.4629C2.73537 31.5179 2.17737 30.2399 2.15937 28.8719C2.14137 27.4949 2.66337 26.2079 3.63537 25.2359L9.34137 19.5299C9.74637 19.1249 9.97137 18.5759 9.97137 17.9999C9.97137 17.4239 9.74637 16.8839 9.34137 16.4699C9.14337 16.2719 8.90938 16.1099 8.63937 16.0019C8.37838 15.8939 8.09937 15.8399 7.81138 15.8399H0.359375V12.9599H5.83137L3.63537 10.7639C2.66337 9.79186 2.14137 8.50486 2.15937 7.12786C2.17737 5.75986 2.73537 4.48186 3.73437 3.53686C4.65237 2.66386 5.86737 2.18686 7.15437 2.18686C8.52237 2.18686 9.87237 2.74486 10.8354 3.71686L12.9504 5.83186V0.359863H15.8304V7.82086C15.8304 8.20786 15.9294 8.58586 16.1274 8.91886C16.3254 9.25186 16.6044 9.52186 16.9464 9.71086C17.0094 9.74686 17.0634 9.76486 17.1084 9.79186C17.1984 9.82786 17.2434 9.84586 17.2974 9.86386C17.3964 9.89986 17.4414 9.90886 17.4864 9.91786C17.6124 9.94486 17.6664 9.95386 17.7114 9.96286C17.8374 9.98086 17.9094 9.98086 17.9814 9.98086C18.0714 9.98086 18.1344 9.98086 18.1974 9.97186C18.2334 9.97186 18.4044 9.94486 18.4044 9.94486C18.4494 9.93586 18.5034 9.92686 18.5484 9.90886C18.6564 9.88186 18.7014 9.86386 18.7554 9.84586C18.8544 9.80986 18.9084 9.78286 18.9534 9.75586C19.0524 9.70186 19.1064 9.67486 19.1514 9.63886C19.2954 9.54886 19.4124 9.44986 19.5114 9.35086C19.9254 8.92786 20.1414 8.38786 20.1414 7.82086V0.359863H23.0214V5.83186L25.2174 3.63586C26.1714 2.68186 27.4314 2.15986 28.7814 2.15986C30.1314 2.15986 31.3914 2.68186 32.3454 3.63586C33.2994 4.58986 33.8214 5.84986 33.8214 7.19986C33.8214 8.54986 33.2994 9.80986 32.3454 10.7639L26.6394 16.4699C26.2344 16.8749 26.0094 17.4149 26.0094 17.9999C26.0094 18.5849 26.2344 19.1249 26.6394 19.5299C26.8374 19.7279 27.0714 19.8899 27.3414 19.9979C27.6024 20.1059 27.8814 20.1599 28.1694 20.1599H35.6304V23.0399H30.1584L32.3544 25.2359C34.3164 27.1979 34.3164 30.4019 32.3544 32.3639C31.4004 33.3179 30.1404 33.8399 28.7904 33.8399C27.4404 33.8399 26.1804 33.3179 25.2264 32.3639L23.0304 30.1679V35.6399H20.1504V28.1789C20.1504 27.8999 20.0964 27.6209 19.9884 27.3509C19.8804 27.0899 19.7184 26.8469 19.5204 26.6489C19.4664 26.5949 19.4124 26.5499 19.3584 26.5049L19.2054 26.3879L19.0254 26.2799L18.8184 26.1809L18.6114 26.1089L18.4134 26.0639L18.2064 26.0369C18.1344 26.0369 18.0624 26.0279 17.9904 26.0279C17.9184 26.0279 17.8464 26.0279 17.7744 26.0369L17.5674 26.0639L17.3604 26.1179L17.1714 26.1899L16.9644 26.2889L16.8024 26.3879C16.8024 26.3879 16.7304 26.4419 16.6944 26.4599C16.5684 26.5589 16.5234 26.6039 16.4694 26.6489C16.2624 26.8469 16.1094 27.0899 16.0014 27.3509C15.8934 27.6119 15.8394 27.8909 15.8394 28.1789V35.6309H12.9594V35.6399ZM17.9994 23.1389C19.3494 23.1389 20.6094 23.6609 21.5634 24.6149L27.2694 30.3209C27.6744 30.7259 28.2324 30.9509 28.7994 30.9509C29.3664 30.9509 29.9154 30.7259 30.3294 30.3209C30.7344 29.9159 30.9594 29.3579 30.9594 28.7909C30.9594 28.2239 30.7254 27.6659 30.3294 27.2609L24.6234 21.5549C22.6614 19.5929 22.6614 16.3889 24.6234 14.4269L30.3294 8.72086C30.7254 8.30686 30.9414 7.76686 30.9414 7.19986C30.9414 6.63286 30.7074 6.09286 30.3114 5.68786C29.9064 5.28286 29.3754 5.05786 28.7994 5.05786C28.2144 5.05786 27.6834 5.27386 27.2784 5.66086L21.5634 11.3759C20.6094 12.3299 19.3494 12.8519 17.9994 12.8519C16.6494 12.8519 15.3894 12.3299 14.4354 11.3759L8.72937 5.66986C8.31537 5.27386 7.79337 5.06686 7.22637 5.06686C6.63237 5.06686 6.10137 5.30086 5.69637 5.69686C5.29137 6.10186 5.06637 6.63286 5.06637 7.19986C5.06637 7.76686 5.27337 8.30686 5.66937 8.72086L11.3844 14.4359C12.3384 15.3899 12.8604 16.6499 12.8604 17.9999C12.8604 19.3499 12.3384 20.6099 11.3844 21.5639L5.67837 27.2699C5.27337 27.6839 5.05737 28.2239 5.05737 28.7999C5.05737 29.3759 5.28237 29.9159 5.68737 30.3119C6.09237 30.7169 6.63237 30.9419 7.19937 30.9419C7.77537 30.9419 8.31537 30.7259 8.72037 30.3209L14.4354 24.6149C15.3894 23.6609 16.6494 23.1389 17.9994 23.1389Z',
      companyLogoIsSvg: true,
      companyUrl: "https://www.nurun.com/",
      period: "August 2025 - October 2025",
      location: "Montreal, QC, Canada",
      technologies: ["PHP", "MySQL", "Drupal 10", "Acquia", "Jira", "Bitbucket", "ddev", "AngularJS"],
      responsibilities: [
        "Code optimization, bug fixes and site maintenance with Drupal 10 (bombardier.com).",
        "Performing code reviews for other developers.",
        "Demoed fixes and enhancements directly to the client."
      ]
    },
    {
      title: "Senior Software Developer",
      company: "BCA Research",
      companyUrl: "https://www.bcaresearch.com/",
      companyLogo: "/images/bca-logo.png",
      period: "February 2020 - July 2025",
      duration: "5+ years",
      location: "Montreal, QC, Canada",
      technologies: ["PHP", "Node.js", "React", "Drupal 10", "Acquia", "CodeIgniter", "AWS", "MySQL", "Docker", "GitHub Actions", "Jira"],
      responsibilities: [
        "Architected and led the consolidation of a dozen separate PHP sites into one multi-site using an object-oriented approach, resulting in a reduction of the codebase by 80%, while simultaneously increasing its performance, flexibility and maintainability.",
        "Created various REST APIs with proper method usage (GET, POST, PUT, DELETE).",
        "Integrating with the SendGrid API, I created a robust email system with microservices using Node.js and AWS (Lambda, API Gateway, EventBridge, RDS), with a user-friendly interface developed in React + TypeScript.",
        // "🏆 Voted by colleagues as the \"most appreciated player\" in October 2024 through an anonymous survey, recognizing my creative ideas and outstanding work.",
        "Voted by colleagues as the \"most appreciated player\" in October 2024 through an anonymous survey, recognizing my creative ideas and outstanding work.",
        "Performed code reviews, optimized SQL queries, mentored junior developers."
      ],
      highlight: false,
      testimonials: [
        {
          name: 'Paul Chow',
          position: 'Former Head of Technology, BCA Research',
          text: "Asrar’s willingness to share knowledge, encourage others, and step in to assist whenever needed makes him an invaluable asset.",
        },
        {
          name: 'Maria Parra',
          position: 'Senior Developer, BCA Research',
          text: "Asrar is an exceptional mentor who taught me invaluable lessons in writing clean, efficient code and applying robust architectural designs.",
        },
        {
          name: 'Arshdeep Singh',
          position: 'Tech Lead, BCA Research',
          text: "I genuinely consider myself lucky to have worked alongside Asrar. He’s one of the kindest, most soft-spoken people you’ll ever meet.",
        },
        {
          name: 'C.E. Lopes',
          position: 'CTO, NDR Research',
          text: "The one thing that consistently stood out was his passion for doing things the right way.",
        },
      ]
    },
    {
      title: "Senior PHP Developer",
      company: "High-Touch Communications",
      companyUrl: "https://htc.ca",
      companyLogo: "/images/htc-logo.png",
      period: "March 2011 - January 2020",
      duration: "9 years",
      location: "Montreal, QC, Canada",
      technologies: ["PHP", "MySQL", "AWS", "Elasticsearch", "Git", "Subversion", "Laravel", "CakePHP", "WordPress", "jQuery"],
      responsibilities: [
        "Led backend and frontend development of B2B e-commerce sites for SMEs, with complex tiered pricing, role-based access, large-scale EDI processing, automated monitoring, internal tools, and Elasticsearch-powered search.",
        "Developed object-oriented enhancements to our proprietary PHP framework, IgnitionWeb, ensuring clear separation of core modules from custom modules.",
        "I collaborated closely with PMs, wrote documentation, performed code reviews, optimized performance, interviewed candidates and mentored new developers."
      ],
      testimonials: [
        {
          name: 'Pat Yoshida',
          position: 'PMO Director, Fastco Canada',
          text: "Asrar is not just your humble developer. He’s your reliable workhorse, committed team member, ideation lightbulb, professional colleague of the highest order, and a wonderful human being.",
        },
        {
          name: 'Musab Mirza',
          position: 'Certified Kubernetes Application Developer',
          text: "Asrar is a guru, an excellent mentor and a well thought programmer. He is at his best when working under pressure.",
        },
      ]

    }
  ];

  const skills = [
    {
      label: 'PHP',
      items: [
        { label: 'PHP', years: '15+'},
        { label: 'Laravel', years: '3'},
        { label: 'Drupal 10+', years: '2'},
        { label: 'CodeIgniter 3', years: '6'},
        { label: 'CakePHP', years: '5'},
        { label: 'Wordpress', years: '3'},
        { label: 'Custom Frameworks', years: '6'},
      ],
    },
    { label: 'JavaScript',
      items: [
        { label: 'JavaScript', years: '20+'},
        { label: 'React', years: '6'},
        { label: 'Node.js', years: '5'},
        { label: 'TypeScript', years: '2'},
        { label: 'Next.js', years: '1'},
        { label: 'jQuery', years: '15+'},
        { label: 'CK Editor', years: '13+'},
      ],
    },
    {
      label: 'Database',
      items: [
        { label: 'Database Design' },
        { label: 'MySQL', years: '15+' },
        { label: 'SQL Server', years: '5+' },
        { label: 'MongoDB', years: '2' },
        { label: 'Normalization' },
        { label: 'EAV Pattern' },
        { label: 'Performance Optimization' },
      ],
    },
    {
      label: 'AWS / Cloud',
      items: [
        { label: 'AWS S3', years: '5+' },
        { label: 'AWS EC2', years: '5+' },
        { label: 'AWS Lambda', years: '5+' },
        { label: 'AWS RDS', years: '5+' },
        { label: 'AWS EventBridge', years: '2+' },
        { label: 'AWS Route 53', years: '2+' },
        { label: 'Azure DevOps' },
      ],
    },
    {
      label: 'Tools & Platforms',
      items: [
        { label: 'VS Code', years: '6'},
        { label: 'Docker', years: '7'},
        { label: 'Git (cli)', years: '13'},
        { label: 'GitHub / GitLab / Bitbucket'},
        { label: 'ddev', years: '2'},
        { label: 'Jira', years: '6'},
        { label: 'Postman', years: '9'},
      ],
    },
    {
      label: 'Admin & DevOps',
      items: [
        { label: 'Linux terminal', years: '15'},
        { label: 'Apache/Nginx', years: '13'},
        { label: 'GitHub Actions', years: '2+'},
        { label: 'CI/CD', years: '2'},
        { label: 'DNS', years: '6'},
        { label: 'npm', years: '6'},
        { label: 'Serverless IaC', years: '2'},
      ],
    },
    {
      label: 'Markup & Styling',
      items: [
        { label: 'HTML/CSS', years: '15+'},
        { label: 'Tailwind CSS', years: '2'},
        { label: 'Bootstrap', years: '9'},
        { label: 'SASS/SCSS', years: '5'},
        { label: 'XML', years: '9'},
        { label: 'Markdown', years: '3'},
        { label: 'SEO Optimization', years: '3'},
      ],
    },
    {
      label: 'Architecture',
      items: [
        { label: 'Object Oriented Programming' },
        { label: 'Design Patterns' },
        { label: 'Test-Driven Development' },
        { label: 'Problem Solving' },
        { label: 'Clean, DRY Code' },
        { label: 'SOLID Principles' },
        { label: 'User Experience'},
      ],
    },

  ];

  const interests = [
    '🪙 Cryptocurrency',
    '🏒 Hockey',
    '☪️ Religion',
    '🎵 Music',
    '🤖 Generative AI',
    '♟️ Chess'
  ];

  const principles = [
    {
      title: "Don't Repeat Yourself",
      description: "Write code once, reuse it everywhere. Duplication is the root of all evil."
    },
    {
      title: "Keep It Simple",
      description: "Complexity is the enemy. Aim for elegance through simplicity, not cleverness."
    },
    {
      title: "Start with the End in Mind",
      description: "Design before you code. Vision guides execution, not the other way around."
    },
    {
      title: "Favour Convention over Configuration",
      description: "Standards reduce cognitive load. Embrace patterns, avoid reinventing wheels."
    },
    {
      title: "Remember: Everything is Possible",
      description: "Constraints are opportunities in disguise. Never say never."
    }
  ];

  return (
    <div className={`${outfitFont.className}`}>
      {/* Hero Section */}
      <section className="flex justify-center py-16 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-4xl text-center">
          <p className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8 leading-relaxed ${baskervvilleFont.className}`}>
            I am a creative software developer committed to clean code, robust architecture
            and bringing immense value to the business, clients, and other devs.
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

      {/* Principles Section */}
      <section className="flex justify-center py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl w-full">
          <div className="space-y-16">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 ${baskervvilleFont.className}`}>
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
                    {interest}
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
