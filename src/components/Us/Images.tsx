import Image from "next/image";
import { motion } from "framer-motion";
import { IImage } from "@/interfaces/image.interface";

const UsImages = ({ images }: { images: IImage[] }) => {
  return (
    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
      <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={1920}
            height={1080}
            className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-xl"
          />
        </motion.div>
      </div>
      <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={1920}
              height={1080}
              className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-xl"
            />
          </motion.div>
        </div>
        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={1920}
              height={1080}
              className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-xl"
            />
          </motion.div>
        </div>
        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={1920}
              height={1080}
              className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UsImages;
