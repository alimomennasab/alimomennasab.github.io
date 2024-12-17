/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/sidebar'

const photos = [
  'berkeley2.jpg',
  'alcatraz.jpg',
  'kyoto.jpg',
  'fuji.jpg',
  'berkeley1.jpg',
  'arrowhead.jpg',
  'beach2.jpg',
  'beach1.jpg',
]

const titles = [
  'Berkeley, 2024',
  'Alcatraz Island, 2024',
  'Kyoto, 2023',
  'Mt. Fuji, 2023',
  'Berkeley, 2023',
  'Lake Arrowhead, 2023',
  'El Matador Beach, 2022',
  'El Matador Beach, 2022',
]

export default function PhotosPage() {
  return (
    <div className="min-h-screen w-screen bg-secondary-color flex items-center justify-center p-4">
      <div className="bg-secondary-color flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl h-auto md:h-[600px]">
        <Sidebar imageUrl="/images/photospagepic.jpeg" />
        {/* MAIN CONTENT */}
        <div className="border-l border-black pl-14 flex flex-col justify-start w-full md:w-3/5 overflow-hidden mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold"> Photos </h1>
          <h2 className="italic text-base md:text-lg text-primary-color mb-4">
            {' '}
            my favorite pics I've taken{' '}
          </h2>
          <div className="overflow-y-auto pr-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative pt-[100%] mb-2">
                    <img
                      src={`/images/${photo}`}
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
  )
}
