import Image from "next/image";
import { contactImage } from "@/constants";

const ContactImage = () => {
  return (
    <div className="lg:absolute lg:inset-0 lg:left-1/2">
      <Image
        src={contactImage.src}
        alt={contactImage.alt}
        className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default ContactImage;
