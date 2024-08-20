/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../components/sidebar";

const photos = [
  'beach1.JPG', 'beach2.JPG', 'arrowhead.JPG',
  'berkeley1.JPG', 'fuji.JPG', 'kyoto.JPG', 'alcatraz.JPG', 'berkeley2.JPG',
];

const titles = [
  'El Matador Beach, 2022', 'El Matador Beach, 2022', 'Lake Arrowhead, 2023',
  'Berkeley, 2023', 'Mt. Fuji, 2023', 'Kyoto, 2023',
  'Alcatraz Island, 2024', 'Berkeley, 2024'
];

export default function PhotosPage() {
  return (
    <div className="min-h-screen w-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-amber-50 flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl h-auto md:h-[600px]">
        <Sidebar imageUrl="/images/photospagepic.jpeg" />
        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-start w-full md:w-3/5 overflow-hidden mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold">Photos 📸</h1>
          <h2 className="italic text-base md:text-lg text-green-600 mb-4"> my favorite pics I've taken </h2>
          <div className="overflow-y-auto pr-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative pt-[100%] mb-2">
                    <img
                      src={`/images/photospage/${photo}`}
                      alt={titles[index]}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-center font-medium text-gray-700">
                    {titles[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}