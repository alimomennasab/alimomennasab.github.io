/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-amber-100 flex items-center justify-center">
      <div className="flex flex-row justify-between p-4 w-4/6 h-4/6">

        {/* SIDEBAR */}
        <div className="flex flex-col w-3/10 justify-start items-end border-r border-black pr-14">
          <h1 className="text-green-600 font-bold text-3xl text-right p-1"> Ali Momennasab </h1>
          <h1 className="text-green-600 text-xl text-right p-1"> Projects </h1>
          <h1 className="text-green-600 text-xl text-right p-1"> Photos </h1>
          <h1 className="text-green-600 text-xl text-right p-1"> Resume </h1>
          <div className="relative w-full aspect-square mt-4 border border-black overflow-hidden">
            <Image
              src="/personal_image.png"
              alt="Personal Image"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        {/* MAIN TEXT */}
        <div className="flex flex-col justify-start w-3/5">
          <h1 className="text-black text-lg">
            Hi! I'm a third-year computer science major attending Cal Poly Pomona.
            I'm interested in web development and deep learning. Check out what I've worked on in my Projects page!
          </h1>

          {/* LINKS */}
          <h1 className="text-black text-lg mt-8">
            Reach out anytime at <span className="font-bold">amomennasab at cpp dot edu</span>.
          </h1>
          <h1 className="text-black text-lg"> otherwise, </h1>
          <h1 className="text-black font-bold text-2xl mt-8 mb-4">
            Find Me @
          </h1>
          <div className="flex flex-row justify-between w-4/6 mb-4">
            <h1 className="text-green-600 text-lg"> Github </h1>
            <h1 className="text-green-600 text-lg"> Linkedin </h1>
            <h1 className="text-green-600 text-lg"> Twitter </h1>
            <h1 className="text-green-600 text-lg"> Instagram </h1>
          </div>

          {/* CURRENTLY */}
          <h1 className="text-black font-bold text-2xl mt-4 mb-4">
            Currently
          </h1>
          <h1 className="text-black text-lg"> - researching at the Cardiac Vision Lab at UCSF </h1>
          <h1 className="text-black text-lg"> - trying to find a job 😵‍💫 </h1>

        </div>
      </div>
    </div>
  );
}