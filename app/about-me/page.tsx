import { FC } from "react";
import Image from "next/image";

import ServiceSlider from "@/components/ServiceSlider";
import { Container } from "@/components/Container";

const Page: FC = () => {
  return (
    <div className="flex flex-col justify-center gap-10 bg-[url('/assets/bg-about-me.jpeg')] bg-cover h-screen">
      <Container as="section" containerStyle="flex flex-col gap-3 mt-40">
        <h1 className="text-5xl max-sm:text-4xl text-white font-semibold">
          My Skills<span className="text-red-500">.</span>
        </h1>
        <div className="text-xl max-xl:text-base max-sm:text-sm text-gray-200">
          <p className="text-2xl max-xl:text-xl max-sm:text-base mb-2">
            With good knowledge of JavaScript/TS, React, React Native, Redux,
            NextJS, NodeJS, Git, Web-sockets, Vite, I am sure that my huge
            experience give me follow benefits:
          </p>
          <p>
            1.{" "}
            <span className="text-fuchsia-400 font-semibold">
              In-depth Financial Sector Knowledge
            </span>{" "}
            - crucial for developing software solutions connected with financial
            sector.
          </p>
          <p>
            2.{" "}
            <span className="text-fuchsia-400 font-semibold">
              Strong soft skills
            </span>{" "}
            - this allows me to interact seamlessly with diverse teams,
            fostering collaboration.
          </p>
          <p>
            3.{" "}
            <span className="text-fuchsia-400 font-semibold">
              Deeper understanding of Customer Needs
            </span>{" "}
            - it allows me to optimize business processes.
          </p>
        </div>
        <div className="absolute sm:left-0 max-sm:right-10 bottom-[50%] max-sm:top-[5%] max-xl:bottom-[56%] rotate-12 animate-pulse duration-75">
          <Image
            src="/assets/bulb.png"
            alt="bulb"
            width={150}
            height={150}
            className="w-32 h-auto max-xl:w-20"
          />
        </div>
      </Container>
      <ServiceSlider />
    </div>
  );
};

export default Page;
