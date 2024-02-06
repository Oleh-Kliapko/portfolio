import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import { IRepo } from "@/constants";
import defaultLogo from "../public/assets/defaultLogo.jpeg";

const AllProjectCard: FC<IRepo> = (project) => {
  const { name, svn_url, topics, repoLogoUrl, homepage } = project;

  return (
    <div className="flex gap-4 w-[90%] p-4 xl:px-8 h-[180px] xl:py-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-orange-200 group hover:bg-gradient-to-r hover:from-gray-900 hover:to-orange-400 transition-colors duration-1000">
      <div className="w-[30%] md:w-auto">
        {homepage && (
          <a href={homepage} className="w-full h-full" target="_blank">
            <Image
              src={repoLogoUrl ? repoLogoUrl : defaultLogo}
              alt="project screen"
              width={280}
              height={280}
              className="rounded-md w-full h-full object-cover md:object-contain"
            />
          </a>
        )}
        {!homepage && (
          <Image
            src={repoLogoUrl ? repoLogoUrl : defaultLogo}
            alt="project screen"
            width={280}
            height={280}
            className="rounded-md w-full h-full object-cover md:object-contain"
          />
        )}
      </div>
      <div className="flex flex-col justify-between w-[70%]">
        <h3 className="text-2xl max-sm:text-xl lg:text-3xl text-orange-100">
          {name}
        </h3>
        <p className="text-gray-900 font-semibold text-base max-sm:text-sm lg:text-xl hover:text-gray-100 duration-300">
          Topics:{" "}
          <span className="font-normal">{topics && topics.join(", ")}</span>
        </p>
      </div>
      <a href={svn_url} className=" ml-auto" target="_blank">
        <span className="w-10 h-10 rounded-full bg-gray-600 inline-flex justify-center items-center text-gray-400 hover:text-gray-200 duration-300 cursor-pointer hover:bg-orange-700">
          <FaGithub size={24} />
        </span>
      </a>
    </div>
  );
};

export default AllProjectCard;
