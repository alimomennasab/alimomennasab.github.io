import Image from 'next/image';
import Link from 'next/link';

type SidebarProps = {
  imageUrl: string;
};

const Sidebar: React.FC<SidebarProps> = ({ imageUrl }) => {
  return (
    <div className="flex flex-col w-3/10 justify-start items-end border-r border-black pr-14">
      <h1 className="text-green-600 font-bold text-3xl text-right p-1">
        <Link href="/" className="text-green-600 hover:font-bold">
          Ali Momennasab
        </Link>
      </h1>
      <Link href="/projects" className="text-green-600 font-light text-xl text-right p-1 hover:font-bold">
        Projects
      </Link>
      <Link href="/photos" className="text-green-600 font-light text-xl text-right p-1 hover:font-bold">
        Photos
      </Link>
      <Link href="/resume" className="text-green-600 font-light text-xl text-right p-1 hover:font-bold">
        Resume
      </Link>
      <div className="rounded-full relative w-full aspect-square mt-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt="image"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Sidebar;
