/* eslint-disable @next/next/no-img-element */
interface PhotoPopupProps {
    photo: string;
    isOpen: boolean;
    onClose: () => void;
  }
  
  const PhotoPopup = ({ photo, isOpen, onClose }: PhotoPopupProps) => {
    if (!isOpen) return null;
  
    return (
    // make backdrop blurry when picture is open
      <div className="fixed inset-0 z-50 flex items-center justify-center border border-black backdrop-blur-sm bg-black/30"
        onClick={onClose}
      >
        <div className="aspect-square w-[650px] bg-white border border-black" onClick={(e) => e.stopPropagation()}  // don't close when clicking the image
        >
          <img
            src={`/images/${photo}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default PhotoPopup;