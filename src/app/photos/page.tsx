/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
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
    <div className="h-screen w-screen bg-amber-50 flex items-center justify-center">
      <div className="flex flex-row justify-between p-4 w-4/6 h-4/6">
        <Sidebar imageUrl="/images/photospagepic.jpeg" />

        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-start w-3/5 overflow-hidden">
          <h1 className="text-3xl font-bold">Photos 📸</h1>
          <h1 className="italic text-lg text-green-600 mb-4"> my favorite pics I've taken </h1>
          <div className="overflow-y-auto pr-4">
            <div className="grid grid-cols-2 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative pt-[100%] mb-2">
                    <img
                      src={`/images/photospage/${photo}`}
                      alt={titles[index]}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center font-medium text-gray-700">
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