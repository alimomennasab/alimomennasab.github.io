/* eslint-disable @next/next/no-img-element */
interface PhotoElementProps {
    photo: string;
    title: string;
    index: number;
    onClick: () => void;
}

const PhotoElement = ({photo, title, index, onClick} : PhotoElementProps) =>{
    return (
        <div key={index} className="flex flex-col" onClick={onClick}>
            <div className="relative pt-[100%] mb-2 border border-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
                src={`/images/${photo}`}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            </div>
            <p className="text-xs sm:text-sm text-center font-medium text-gray-700">
            {title}
            </p>
        </div>
    );
}

export default PhotoElement
