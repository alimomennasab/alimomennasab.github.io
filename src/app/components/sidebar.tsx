/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

type SidebarProps = {
  imageUrl: string
}

const Sidebar: React.FC<SidebarProps> = ({ imageUrl }) => {
  return (
    <div className="flex flex-col w-3/10 justify-start items-end">
      <h1 className="text-primary-color font-bold text-3xl text-right p-1">
        <Link href="/" className="text-primary-color hover:font-bold">
          Ali Momennasab
        </Link>
      </h1>
      <Link
        href="/projects"
        className="text-primary-color font-light text-xl text-right p-1 hover:font-bold"
      >
        Projects
      </Link>
      <Link
        href="/photos"
        className="text-primary-color font-light text-xl text-right p-1 hover:font-bold"
      >
        Photos
      </Link>
      <Link
        href="/Ali_Momennasab_resume.pdf"
        className="text-primary-color font-light text-xl text-right p-1 hover:font-bold"
      >
        Resume
      </Link>
      <div className="relative w-full pt-[100%] mt-4 rounded-full overflow-hidden">
        <img
          src={imageUrl}
          alt="Profile"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  )
}

export default Sidebar
