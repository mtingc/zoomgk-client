import { IContentImage } from "@/interfaces/Content/image.interface";
import Image from "next/image";

const ContentImage = ({ image }: { image: IContentImage }) => {
  return (
    <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
      <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <Image
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
};

export default ContentImage;
