import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar';

const projects = [
  {
    title: "Research",
    description: "In Progress 🚧",
    link: "https://cardiacvision.ucsf.edu",
    image: "/images/heart.png"
  },
  {
    title: "NFL Mock Draft Sim",
    description: "A free NFL mock draft simulator.",
    link: "https://nfl-mock-draft.vercel.app",
    image: "/images/nflmockimage.jpeg"
  },
  {
    title: "BroncoDirectMe",
    description: "Professor rating and average course/professor gpa stat displays for Cal Poly Pomona's course registration portal.",
    link: "https://broncodirect.me",
    image: "/images/broncodirectmeimage.png"
  },
  {
    title: "Somnos",
    description: "Alert long-distance drivers falling asleep at the wheel with ARKit eye tracking.",
    link: "https://github.com/alimomennasab/Somnos",
    image: "/images/SomnosLogo.png"
  }
];

export default function ProjectsPage() {
  return (
    <div className="h-screen w-screen bg-amber-50 flex items-center justify-center">
      <div className="flex flex-row justify-between p-4 w-4/6 h-4/6">
        {/* SIDEBAR */}
        <Sidebar imageUrl="/personal_image.png" />

        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-start w-3/5">
          <h2 className="text-3xl font-bold mb-4 ml-8">My Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-3/4">
                  <Link
                    href={project.link}
                    className="block border border-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </Link>
                  <h3 className="text-md font-semibold text-black mt-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}