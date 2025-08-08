import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";
import { Outfit } from "next/font/google";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Asrar Abbasi",
  description: "I'm a Muslim, a hafiz, a Canadian, and a senior software developer. I'm also a hockey, Bitcoin and chocolate lover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <header className="top-0 z-50 w-full border-b-base-300 border-b-2 flex justify-center">
          <div className="flex items-center justify-between w-full px-3 py-3 max-w-10/12">
            <div className="flex items-center">
              <Image src={'/asrar-avatar.png'} alt="Asrar" width="54" height="54" className="rounded-full p-1 bg-white border-gray-200" />
              <div className={'ml-5 ' + outfitFont.className}>
                <div className="text-2xl text-gray-700 dark:text-gray-300">Asrar Abbasi</div>
                <div className="text-md  text-gray-500 dark:text-gray-400">Senior Software Developer</div>
              </div>

            </div>
            <div className="flex items-center">
              <a href="https://github.com/asrarca" data-tip="GitHub" className="tooltip tooltip-bottom hidden sm:inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                <svg className="w-[1.1rem] h-[1.1rem]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A" data-tip="YouTube" className="tooltip tooltip-bottom hidden sm:inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                  <path fillRule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://twitter.com/asrar_ca" data-tip="X" className="tooltip tooltip-bottom hidden sm:inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                <svg className="w-4.5 h-4.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"></path>
                </svg>
                <span className="sr-only">Twitter/X</span>
              </a>
              <DarkModeToggle />
            </div>
          </div>

        </header>
        {children}
      </body>
    </html>
  );
}
