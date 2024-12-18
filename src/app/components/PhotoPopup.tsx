/* eslint-disable @next/next/no-img-element */
interface PhotoPopupProps {
    photo: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
  }
  
  const PhotoPopup = ({ photo, isOpen, description, onClose }: PhotoPopupProps) => {
    if (!isOpen) return null;
  
    return (
    // make backdrop blurry when picture is open
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        onClick={onClose}
      >
        <div className="aspect-square w-[650px] bg-white border-8 border-white" onClick={(e) => e.stopPropagation()}  // don't close when clicking the image
        >
          <img
            src={`/images/${photo}`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="p-4 text-center">
            {description}
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotoPopup;