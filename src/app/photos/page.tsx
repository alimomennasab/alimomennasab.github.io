/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Sidebar from '../components/sidebar'
import PhotoElement from '../components/PhotoElement'

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
      <div className="bg-secondary-color flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl md:h-[600px]">
        <Sidebar imageUrl="/images/photospagepic.jpeg" />
        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-start w-full md:w-3/5 border-l border-black pl-14 h-fit pb-4">
          <h1 className="text-2xl md:text-3xl font-bold"> Photos </h1>
          <h2 className="italic text-base md:text-lg text-primary-color mb-4">
            My favorite pics I've taken
          </h2>
          <div className="overflow-y-auto pr-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {photos.map((photo, index) => (
                <PhotoElement
                  key={index}
                  photo={photo}
                  title={titles[index]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
