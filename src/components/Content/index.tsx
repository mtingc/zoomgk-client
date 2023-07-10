import { ContentList, ContentImage } from "@/components";
import { contentImage, contentList } from "@/constants";

const Content = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <ContentImage image={contentImage} />
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-play-200">
              Capturamos los momentos
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Más preciosos de tu vida.
            </h1>
            <p className="mt-4 text-xl leading-8">
              Convirtiendolos en recuerdos duraderos y emotivos.
            </p>
            <div className="max-w-xl text-base leading-7 lg:max-w-none">
              <ContentList list={contentList} />
              <p className="mt-8">
                Somos un estudio de fotografía y video especializado en eventos
                sociales, hemos perfeccionado nuestras habilidades para capturar
                cada detalle, cada emoción y cada momento especial de tus
                celebraciones.
              </p>
              <p className="mt-4">
                Estamos comprometidos a brindarte un servicio personalizado y de
                calidad, que refleje tu estilo y personalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
