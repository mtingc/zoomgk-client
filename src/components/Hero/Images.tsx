import Image from "next/image";
import { motion } from "framer-motion";

import { IImage } from "@/interfaces/image.interface";

const ImagesHero = ({ images }: { images: IImage[] }) => {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={1920}
            height={1080}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </motion.div>
      </div>
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={1920}
            height={1080}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={1920}
            height={1080}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </motion.div>
      </div>
      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={1920}
            height={1080}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <Image
            src={images[4].src}
            alt={images[4].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={1920}
            height={1080}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </motion.div>
      </div>
    </div>
  );
};

export default ImagesHero;
