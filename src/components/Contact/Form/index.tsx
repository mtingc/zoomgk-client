import Form from "./Form";

const ContactForm = () => {
  return (
    <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-play-200">
            ¡Gracias por tu interés!
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Estamos emocionados de poder capturar momentos especiales y crear
            recuerdos duraderos para ti.
          </h1>
          <p className="mt-4 text-xl leading-8">
            Si tienes alguna pregunta, solicitud o simplemente quieres decir
            hola, estamos aquí para ayudarte.
          </p>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
