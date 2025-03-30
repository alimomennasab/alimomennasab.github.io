"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect} from 'react';
import Sidebar from '../components/sidebar';
import PhotoElement from '../components/PhotoElement';
import PhotoPopup from '../components/PhotoPopup';

const photos = [
  'berkeley2.jpg',
  'alcatraz.jpg',
  'kyoto.jpg',
  'fuji.jpg',
  'shibuya.jpeg',
  'inokashirapark.jpeg',
  'berkeley1.jpg',
  'lakelouise.jpeg',
  'emeraldlake.jpeg',
  'arrowhead.jpg',
  'beach2.jpg',
  'beach1.jpg',
];

const titles = [
  'Berkeley, June 2024',
  'Alcatraz Island, June 2024',
  'Kyoto, Dec. 2023',
  'Mt. Fuji, Dec. 2023',
  'Shibuya, Dec. 2023',
  'Inokashira Park, Dec. 2023',
  'Berkeley, Oct. 2023',
  'Lake Louise, July 2023',
  'Emerald Lake, July 2023',
  'Lake Arrowhead, Jan. 2023',
  'El Matador Beach, Nov. 2022',
  'El Matador Beach, Nov. 2022',
];

const descriptions = [
  "I spent a month in the Bay researching at UCSF and exploring the Bay. This was my favorite view from the entire trip.",
  '',
  '',
  'The early-morning view from the window of a Shinkansen from Tokyo to Kyoto.',
  '',
  '',
  'I took this picture a few hours after Caleb Williams threw for 369 yards vs. Cal.',
  '',
  '',
  '',
  '',
  '',
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{photo: string; index: number} | null>(null);

  useEffect(() => {
    if (selectedPhoto !== null) {
      document.body.style.overflow = 'hidden'; // don't allow scrolling when popup is open
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPhoto]); 

  return (
    <>
      <div className="min-h-screen w-screen bg-secondary-color flex items-center justify-center p-4">
        <div className="bg-secondary-color flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl md:h-[600px]">
          <Sidebar imageUrl="/images/photospagepic.jpeg" />
          <div className="flex flex-col justify-start w-full md:w-3/5 border-l border-black pl-14 h-fit pb-4">
            <h1 className="text-2xl md:text-3xl font-bold">Photos</h1>
            <h2 className="italic text-base md:text-lg text-primary-color">
              My favorite pics I've taken
            </h2>
            <div className="overflow-y-auto pr-4 pt-2 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {photos.map((photo, index) => (
                  <PhotoElement
                    key={index}
                    photo={photo}
                    title={titles[index]}
                    index={index}
                    onClick={() => setSelectedPhoto({photo: photo, index: index})}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhotoPopup
        photo={selectedPhoto?.photo || ''}
        isOpen={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        description={selectedPhoto ? descriptions[selectedPhoto.index] : ''}
      />
    </>
  );
}