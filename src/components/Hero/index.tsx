import Link from "next/link";
import { motion } from "framer-motion";
import { ImagesHero, BntContact } from "@/components";
import { heroImages } from "@/constants";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-12">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-zgk-100 sm:text-6xl">
              Somos tu mejor recuerdo
            </h1>
            <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
              Brindamos una experiencia única y personalizada, donde cada
              detalle es cuidadosamente capturado para que tus momentos cobren
              vida de una manera mágica.
            </p>
            <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
              Estamos ansiosos por ser parte de tu historia y crear para ti una
              experiencia fotográfica y videográfica excepcional.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <BntContact />
            <Link
              className="text-sm leading-6 text-zgk-600 hover:text-zgk-100 transition-colors duration-300"
              href="/live"
            >
              Zoom Live
            </Link>
          </motion.div>
        </div>
        <ImagesHero images={heroImages} />
      </div>
    </div>
  );
};

export default Hero;
