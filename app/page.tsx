"use client";

import { FC } from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Particle from "@/components/Particle";
import { Container } from "@/components/Container";

import { myFace2, partBg } from "@/public/assets";
import { CertificatesList } from "@/components/Certificates";

interface TypewriterConfig {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  onLoop?: (loopCount: number) => void;
  onDone?: () => void;
}

const Home: FC = () => {
  const typewriterConfig: TypewriterConfig = {
    words: [
      "Full Stack MERN Developer.",
      "Front-end React Developer.",
      "Back-end NodeJS Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  };

  const [text] = useTypewriter(typewriterConfig);

  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-home.jpg')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-0 bottom-0 z-[10]">
        <Image
          src={myFace2}
          alt="myFace"
          width={560}
          priority={true}
          className="w-[680px] h-auto z-[1] max-lg:w-[480px]"
        />
      </div>
      <Image
        src={partBg}
        alt="paint"
        width={230}
        className="absolute left-0 top-0"
      />
      <Container
        as="section"
        containerStyle="flex flex-col gap-8 z-[10] justify-end"
      >
        <div className="max-sm:text-wrap text-gray-200 xl:text-gray-400 xl:pb-2 max-sm:pr-20 max-w-[650px]">
          <h2 className="text-3xl max-sm:text-xl sm:flex sm:flex-col mb-8">
            <span>I am a </span>
            <div>
              <span className="text-red-500 text-3xl max-sm:text-xl">
                {text}
              </span>
              <Cursor cursorStyle="|" cursorColor="#EF4444" />
            </div>
          </h2>
          <div className="text-xl max-sm:text-base text-justify">
            <p className="mb-2">
              I focus on MERN technology and can communicate in English (B1+).
            </p>
            <p>
              I believe that my previous experience within the financial sector
              provides me with significant advantages as a developer for any
              company. Check out my projects and skills.
            </p>
          </div>
        </div>
        <div className="max-w-[550px]">
          <h3 className="text-xl max-sm:text-base text-orange-200">
            Per aspera ad Astra
          </h3>
          <span className="text-red-500">Lucius Annaeus Seneca</span>
        </div>
        <CertificatesList />
      </Container>
    </main>
  );
};

export default Home;
