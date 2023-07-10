import Image from "next/image";
import Link from "next/link";
import { logo } from "@/constants";

const Logo = () => {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">ZoomGraphiK</span>
      <Image
        className="h-8 w-auto"
        src={logo}
        width={32}
        height={32}
        alt="ZoomGraphiK logo"
      />
    </Link>
  );
};

export default Logo;
