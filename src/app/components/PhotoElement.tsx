/* eslint-disable @next/next/no-img-element */
interface PhotoElementProps {
    photo: string;
    title: string;
    index: number;
}

const PhotoElement = ({photo, title, index} : PhotoElementProps) =>{
    return (
        <div key={index} className="flex flex-col">
            <div className="relative pt-[100%] mb-2 border border-black">
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
