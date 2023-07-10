import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoBlanco, logoNegro } from "@/constants";

const Logo = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = scroll ? logoBlanco : logoNegro;

  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">ZoomGraphiK</span>
      <Image
        className="h-8 w-auto"
        src={logoSrc}
        width={32}
        height={32}
        alt="ZoomGraphiK logo"
      />
    </Link>
  );
};

export default Logo;
