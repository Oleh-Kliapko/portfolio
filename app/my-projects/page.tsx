import { FC } from "react";

import { Container } from "@/components/Container";
import ProjectSlider from "@/components/ProjectSlider";

const Page: FC = () => {
  return (
    <div className="flex justify-center gap-5 flex-col h-screen bg-[url('/assets/bg-my-projects.jpeg')] bg-cover">
      <Container as="section">
        <h1 className="text-[50px] text-white font-semibold max-sm:text-3xl mb-4">
          My favorite projects<span className="text-red-500">.</span>
        </h1>
        <ProjectSlider />
      </Container>
    </div>
  );
};

export default Page;
