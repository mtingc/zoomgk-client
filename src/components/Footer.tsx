import { socials } from "@/constants";

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-28 pb-14 sm:pt-24 sm:pb-12 lg:px-8">
      <div className="flex justify-center space-x-10">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; {new Date().getFullYear()} ZoomGraphiK, todos los derechos
        reservados.
      </p>
    </div>
  );
};

export default Footer;
