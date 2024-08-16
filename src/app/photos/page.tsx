import Sidebar from "../components/sidebar";

export default function PhotosPage() {
    return (
      <div className="h-screen w-screen bg-amber-50 flex items-center justify-center">
        <div className="bg bg-amber-50 flex flex-row justify-between p-4 w-4/6 h-4/6">
          <Sidebar imageUrl="/personal_image.png" />
        </div>
      </div>
    );
  }
  