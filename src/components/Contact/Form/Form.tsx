const Form = () => {
  return (
    <form action="#" method="POST" className="mt-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Nombre
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Correo
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between text-sm leading-6">
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-900"
            >
              Teléfono
            </label>
            <p id="phone-description" className="text-gray-400">
              Optional
            </p>
          </div>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              aria-describedby="phone-description"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between text-sm leading-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ¿Cómo podemos ayudarte?
            </label>
            <p id="message-description" className="text-gray-400">
              Max 200 caracteres
            </p>
          </div>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-describedby="message-description"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
        <button
          type="submit"
          className="rounded-md bg-play-200 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-play-100 transition-colors duration-300"
        >
          Contactar
        </button>
      </div>
    </form>
  );
};

export default Form;
