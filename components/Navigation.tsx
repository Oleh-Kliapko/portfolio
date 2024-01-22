"use client";

import { useState, useEffect, FC } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { NavLinks, INavLink } from "@/constants";
import Transition from "./Transition";

const Navigation: FC = () => {
  const path: string = usePathname();

  const [isRouting, setIsRouting] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>(
    typeof window !== "undefined"
      ? window.localStorage.getItem("activePage") || "Home"
      : "Home"
  );
  const [prevPath, setPrevPath] = useState<string>("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  useEffect(() => {
    window.localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const handleLinkClick = (name: string) => {
    setActivePage(name);
    window.localStorage.setItem("activePage", name);
  };

  return (
    <div
      className="flex px-10 py-4 items-center justify-center rounded-full bg-gray-500 bg-opacity-50 max-lg:px-4 max-sm:px-2 max-lg:py-6
      max-lg:fixed max-lg:right-6 max-sm:right-2 max-lg:top-[30%] max-sm:top-[33%] max-lg:z-[20]"
    >
      <AnimatePresence mode="wait">
        {isRouting && <Transition />}
        <nav className="flex gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-full">
          {NavLinks.map(({ name, link, Icon }: INavLink) => (
            <Link key={name} href={link} onClick={() => handleLinkClick(name)}>
              <Icon
                className={`w-7 h-7 max-sm:w-6 max-sm:h-6 ${
                  activePage === name ? "text-orange-500" : "text-white"
                }`}
              />
            </Link>
          ))}
        </nav>
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
