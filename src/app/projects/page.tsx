/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Sidebar from '../components/sidebar'

const projects = [
  {
    title: 'DomainFilms',
    description: 'A movie streaming website with a custom recommendation system.',
    link: 'https://master.d3i4ueyzohhlqp.amplifyapp.com',
    image: '/images/domainfilms.png',
    year: '[Project] 2025 - Present'
  },
  {
    title: 'Cardiac Vision Lab',
    description: 'Generating synthetic ultrasound data and segmenting ultrasound hearts with deep learning.',
    link: 'https://cardiacvision.ucsf.edu',
    image: '/images/heart.png',
    year: '[Research] 2023 - Present'
  },
  {
    title: 'Undergraduate Seminar',
    description: 'ResNet-50 Leaf Disease Classification.',
    link: 'https://github.com/alimomennasab/CS4630',
    image: '/images/leafproject.png',
    year: '[Project] 2024'
  },
  {
    title: 'NFL Mock Draft Simulator',
    description: 'An NFL mock draft simulator for the 2025 draft class.',
    link: 'https://nfl-mock-draft.vercel.app',
    image: '/images/nflmockimage.jpeg',
    year: '[Project] 2024'
  },
  {
    title: 'BroncoDirectMe',
    description:
      "Professor ratings & course GPA stats in Cal Poly Pomona's course registration portal.",
    link: 'https://broncodirect.me',
    image: '/images/broncodirectmeimage.png',
    year: '[Project] 2023'
  },
  {
    title: 'Somnos',
    description: 'Alert long-distance drivers falling asleep at the wheel with ARKit eye tracking.',
    link: 'https://github.com/alimomennasab/Somnos',
    image: '/images/SomnosLogo.png',
    year: '[Project] 2022'
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-screen bg-secondary-color flex items-center justify-center p-4">
      <div className="bg-secondary-color flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl md:h-[600px] scroller">
        <Sidebar imageUrl="/images/projects_image.png" />
        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-start w-full md:w-3/5 border-l border-black pb-4 pl-14 h-fit">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full">
                    <Link
                      href={project.link}
                      className="block border border-black bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative pt-[100%]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <h3 className="text-sm md:text-md font-semibold text-black mt-2">
                      {project.title}
                    </h3>
                    <p className='text-sm text-black italic'> {project.year} </p>
                    <p className="text-xs md:text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
