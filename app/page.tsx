import { FC } from "react";
import Image from "next/image";

import Particle from "@/components/Particle";
import { Container } from "@/components/Container";

import { myFace2, partBg } from "@/public/assets";

const Home: FC = () => {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-home.png')]">
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
      <Container as="section" containerStyle="flex flex-col gap-3 z-[10]">
        <div>
          <h1 className="text-[40px] max-sm:text-[28px] text-white max-w-[500px]">
            Per aspera ad Astra
          </h1>
          <span className="text-red-500">Lucius Annaeus Seneca</span>
        </div>
        <p className="text-[20px] max-sm:text-base max-sm:text-wrap text-gray-200 xl:text-gray-400 xl:pb-2 max-sm:pr-20 max-w-[400px]">
          I am a Junior Full Stack Developer and focus on MERN technology, Redux
          and English. I believe that my previous experience within the
          financial sector provides me with significant advantages as a
          developer for any company. Check out my projects and skills.
        </p>
      </Container>
    </main>
  );
};

export default Home;
