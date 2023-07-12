import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Logo } from "@/components";
import { navigation } from "@/constants";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scroll ? "bg-zgk-bk text-neutral-200" : "white-bg text-zgk-bk"
      } transition-colors duration-300`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-sm leading-6 hover:text-zgk-100 transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm leading-6 hover:text-play-100 transition-colors duration-300"
          >
            Zoom <strong className="font-semibold text-play-100">Live</strong>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white text-zgk-bk px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 hover:bg-gray-50"
                  >
                    Zoom <strong className="font-semibold text-play-100">Live</strong>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
