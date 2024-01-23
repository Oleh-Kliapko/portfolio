import { FC } from "react";

import { Container } from "@/components/Container";
import { AllProjects } from "@/components/AllProjects";

const Page: FC = () => {
  return (
    <div className="flex justify-end gap-5 flex-col h-screen bg-[url('/assets/bg-all-projects.jpeg')] bg-cover">
      <Container as="section">
        <h1 className="text-[50px] text-white font-semibold max-sm:text-3xl mb-4">
          My public projects<span className="text-red-500">.</span>
        </h1>
        <AllProjects />
      </Container>
    </div>
  );
};

export default Page;
