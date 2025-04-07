'use client';

import Image from 'next/image';

interface PhotoElementProps {
  photo: string;
  title: string;
  index: number;
  onClick: () => void;
}

const PhotoElement = ({ photo, title, index, onClick }: PhotoElementProps) => {
  return (
    <div key={index} className="flex flex-col" onClick={onClick}>
      <div className="relative pt-[100%] mb-2 border border-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <Image
          src={`/images/${photo}`}
          alt={title}
          fill
          className="object-cover"
          quality={75}
          loading="lazy"
        />
      </div>
      <p className="text-xs sm:text-sm text-center font-medium text-gray-700">
        {title}
      </p>
    </div>
  );
};

export default PhotoElement;
