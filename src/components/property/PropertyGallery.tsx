
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PropertyGalleryProps {
  image: string;
  title: string;
}

const PropertyGallery = ({ image, title }: PropertyGalleryProps) => {
  return (
    <div className="mb-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </AspectRatio>
    </div>
  );
};

export default PropertyGallery;
