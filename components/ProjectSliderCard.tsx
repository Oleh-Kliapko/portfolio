"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { FaSearch, FaGithub, FaGlobe } from "react-icons/fa";

import { IProject } from "@/constants";
import { ImageModal } from "./ImageModal";

interface ProjectProps {
  project: IProject;
}

export const ProjectSliderCard: FC<ProjectProps> = ({ project }) => {
  const { id, title, links, images } = project;

  const [enlargedImage, setEnlargedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setEnlargedImage(index === enlargedImage ? null : index);
  };

  return (
    <div className="flex flex-col">
      <h3 className=" text-orange-100 font-semibold text-2xl max-sm:text-lg mb-4">
        {id}. {title}
      </h3>
      <div className="flex justify-between mb-4">
        {links.map(({ git, website, description }) => (
          <div key={git} className="flex items-center gap-2 max-sm:flex-col">
            {description && (
              <p className="text-orange-100 font-semibold text-sm md:text-base lg:text-xl">
                {description}:
              </p>
            )}
            <div className="flex gap-2">
              <a href={git} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-orange-100 hover:fill-orange-400" />
              </a>
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-orange-100  hover:fill-orange-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {images.map((image, index) => (
          <div
            className="relative group max-h-[150px] md:max-h-[230px]"
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt="project screen"
              width={280}
              height={280}
              className="rounded-md w-full h-full object-cover"
            />
            <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-orange-800 via-orange-500 to-orange-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
            <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg">
              <FaSearch size={36} color="white" />
            </div>
          </div>
        ))}
      </div>
      {enlargedImage !== null && (
        <ImageModal
          projectId={id}
          imageUrl={images[enlargedImage]}
          onClose={() => setEnlargedImage(null)}
        />
      )}
    </div>
  );
};
