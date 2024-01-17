import { Container } from "@/components/Container";
import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center gap-5 flex-col h-screen bg-[url('/assets/bg-my-projects.jpeg')] bg-cover">
      <Container as="section">
        <h1 className="text-[50px] text-white font-semibold whitespace-nowrap">
          My Work<span className="text-red-500">.</span>
        </h1>
        <ProjectSlider />
      </Container>
    </div>
  );
};

export default Page;
