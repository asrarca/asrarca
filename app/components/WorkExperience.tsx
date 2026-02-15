"use client";

import Image from "next/image";

interface WorkExperienceProps {
  title: string;
  company: string;
  companyLogo?: string|object;
  companyUrl?: string;
  period: string;
  duration?: string;
  location: string;
  technologies?: string[];
  responsibilities: string[];
  testimonials?: object[];
  highlight?: boolean;
}

export default function WorkExperience({
  title,
  company,
  companyLogo,
  companyUrl,
  period,
  location,
  technologies,
  responsibilities,
  testimonials,
  highlight = false
}: WorkExperienceProps) {
  const logoIsSvg = companyLogo && typeof companyLogo === 'object' && companyLogo.svgPath;
  return (
    <div className={`card bg-white dark:bg-gray-800 shadow-xl ${highlight ? 'border-2 border-blue-500' : ''}`}>
      <div className="card-body">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className={`mr-4 hidden md:block ${logoIsSvg ? "p-1" : ""}`}>
              {companyLogo && (logoIsSvg) ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 36 36" fill="currentColor">
                  <path d={companyLogo.svgPath} fillRule="evenodd"></path>
                </svg>

              ) : (
                <Image
                  src={companyLogo}
                  alt={`${companyLogo.substring(companyLogo.lastIndexOf('/') + 1).split('.')[0]} logo`}
                  width={100}
                  height={100}
                  className="h-16 w-auto object-containrounded"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) }
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <a href={companyUrl} className="text-xl text-blue-600 dark:text-blue-400 font-semibold" target="_blank">{company}</a>
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            <p className="font-semibold">{period}</p>
            <p>{location}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-4">
          <div>
            {technologies && technologies.length > 0 && (
              <div className="mb-4 md:ml-2">
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2 lg:text-sm">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className={'text-lg mb-4'}
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          {testimonials && testimonials.length > 0 && (

              <div className="mt-4 lg:ml-20">
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2 lg:text-sm">Testimonials</p>
                <ul className="list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {testimonials.map((testimonial, index) => (
                    <li key={index} className="text-md mb-8">
                      <p className="font-bold">&quot;{testimonial.text}&quot;</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.name}<br/>{testimonial.position}</p>
                    </li>
                  ))}
                </ul>
              </div>
          )}
        </div>

      </div>
    </div>
  );
}
