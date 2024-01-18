import { FC } from "react";
import Link from "next/link";

import { Social, ISocial } from "@/constants";
import Navigation from "./Navigation";
import { Container } from "./Container";

const Navbar: FC = () => {
  return (
    <Container
      as="header"
      containerStyle="fixed top-0 bg-transparent z-[20] w-full flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between pt-10"
    >
      <h1 className="text-white text-[48px] whitespace-nowrap">
        Oleh <span className="font-thin">Kliapko</span>
        <span className="text-red-500">.</span>
      </h1>
      <Navigation />
      <div className="flex flex-row gap-5 items-center">
        {Social.map(({ Icon, link }: ISocial, index) => (
          <Link
            href={link}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="w-10 h-10 fill-orange-100 hover:fill-orange-600 transition-colors ease-in-out duration-200 cursor-pointer" />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Navbar;
