import Link from "next/link";
import { ImagesHero } from "@/components";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-12">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zgk-100 sm:text-6xl">
            Somos tu mejor recuerdo
          </h1>
          <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
            Brindamos una experiencia única y personalizada, donde cada detalle
            es cuidadosamente capturado para que tus momentos cobren vida de una
            manera mágica.
          </p>
          <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
            Estamos ansiosos por ser parte de tu historia y crear para ti una
            experiencia fotográfica y videográfica excepcional.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-play-200 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-play-100 transition-colors duration-300"
            >
              Get started
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-zgk-600 hover:text-zgk-100 transition-colors duration-300"
            >
              Live demo
            </Link>
          </div>
        </div>
        <ImagesHero />
      </div>
    </div>
  );
};

export default Hero;
