import Link from "next/link";

const BntContact = () => {
  return (
    <Link
      href="/contacto"
      className="rounded-md bg-play-200 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-play-100 transition-colors duration-300"
    >
      Contáctanos
    </Link>
  );
};

export default BntContact;
