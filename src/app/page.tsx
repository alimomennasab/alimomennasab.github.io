/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-amber-50 flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl h-auto md:h-[600px] ">
        {/* SIDEBAR */}
        <Sidebar imageUrl="/images/personal_image.png" />
        {/* MAIN TEXT */}
        <div className="flex flex-col justify-start w-full md:w-3/5 overflow-hidden mt-4 md:mt-0">
          <h1 className="text-black text-base md:text-lg mb-4">
            Hi! I'm a third-year computer science major attending Cal Poly Pomona.
            I'm interested in web development and deep learning. Check out what I've worked on in my
            <span>&nbsp;</span>
            <span>
              <Link href="/projects" className="text-green-600 hover:underline">
                Projects
              </Link>
            </span>
            <span>&nbsp;</span>
            page!
          </h1>
          {/* LINKS */}
          <h1 className="text-black text-base md:text-lg mb-2">
            Reach out anytime at <span className="font-bold">amomennasab (at) cpp (dot) edu</span>.
          </h1>
          <h1 className="text-black text-base md:text-lg mb-4"> otherwise, </h1>
          <h1 className="text-black font-bold text-xl md:text-2xl mb-2">
            Find Me @
          </h1>
          <div className="flex flex-row justify-between w-full md:w-1/2 mb-4">
            <a
              href="https://github.com/alimomennasab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-base md:text-lg hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/amomennasab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-base md:text-lg hover:underline"
            >
              Linkedin
            </a>
            <a
              href="https://x.com/momennasabali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-base md:text-lg hover:underline"
            >
              Twitter
            </a>
          </div>
          {/* CURRENTLY */}
          <h1 className="text-black font-bold text-xl md:text-2xl mb-2">
            Currently
          </h1>
          <h1 className="text-black text-base md:text-lg"> - researching at the Cardiac Vision Lab at UCSF </h1>
          <h1 className="text-black text-base md:text-lg"> - looking for software engineering/deep learning roles for Fall 2024, Winter 2024/25, and Spring 2025</h1>
        </div>
      </div>
    </div>
  );
}