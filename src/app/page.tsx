/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-secondary-color flex items-center justify-center p-4">
      <div className="bg-secondary-color flex flex-col md:flex-row md:items-stretch justify-between p-4 w-full max-w-4xl h-auto">
        {/* SIDEBAR */}
        <Sidebar imageUrl="/images/personal_image.jpg" />
        {/* MAIN TEXT */}
        <div className="border-l border-black pl-14 flex flex-col justify-start md:justify-between md:pb-12 w-full md:w-3/5 mt-4 md:mt-0">
          <p className="text-black text-lg md:text-xl mb-6 md:mb-0">
            Hi! I&apos;m an MSCS student at UCSD.
          </p>
          <p className="text-black text-lg md:text-xl mb-6 md:mb-0">
            I&apos;m generally interested in vision language models, one-step generation, latent reasoning,
            and diffusion.
          </p>
          <p className="text-black text-lg md:text-xl mb-6 md:mb-0">
            In my free time, I like playing chess and learning how to play the electric guitar 🎸.
          </p>

          {/* LINKS */}
          <p className="text-black text-lg md:text-xl mb-8 md:mb-0">
            Reach out at <span className="font-bold">amomennasab (at) ucsd (dot) edu</span>. Or,
          </p>
          <div>
            <h1 className="text-black font-bold text-2xl md:text-3xl mb-2">Find Me @</h1>
            <div className="flex flex-row justify-left w-full md:w-1/2 mb-4 md:mb-0 gap-4">
            <a
              href="https://github.com/alimomennasab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-color text-lg md:text-xl hover:underline"
            >
              GitHub 
            </a>
            <a
              href="https://www.linkedin.com/in/amomennasab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-color text-lg md:text-xl hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.chess.com/member/ali_m_123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-color text-lg md:text-xl hover:underline"
            >
              Chess.com
            </a>
            <a
              href="https://www.goodreads.com/user/show/200826158-ali-momennasab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-color text-lg md:text-xl hover:underline"
            >
              Goodreads
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
