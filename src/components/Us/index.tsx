import { motion } from "framer-motion";
import { UsImages, BntContact } from "@/components";
import { usImages } from "@/constants";

const Us = () => {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base font-semibold leading-7 text-play-200">
                Somos un estudio
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Especializado en eventos sociales.
              </h1>
              <p className="mt-4 text-xl leading-8">
                Hemos perfeccionado nuestras habilidades para capturar cada
                detalle, emoción y momento especial de tus celebraciones.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Estamos comprometidos a brindarte un servicio personalizado y de
                calidad, que refleje tu estilo y personalidad.
              </p>
            </motion.div>
            <div className="mt-10 flex">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BntContact />
              </motion.div>
            </div>
          </div>
          <UsImages images={usImages} />
        </div>
      </div>
    </div>
  );
};

export default Us;
