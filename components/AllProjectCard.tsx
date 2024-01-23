import { FC } from "react";
import { FaGithub } from "react-icons/fa";

import { IRepo } from "@/constants";
import { formatDate } from "../helpers/formatDate";

const AllProjectCard: FC<IRepo> = (project) => {
  const { name, description, svn_url, topics, created_at } = project;

  return (
    <div className="flex gap-4 w-[90%] p-4 xl:px-12 h-[180px] xl:py-10 rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-orange-200 group hover:bg-gradient-to-r hover:from-gray-900 hover:to-orange-400 transition-colors duration-1000">
      <div className="w-[30%] flex flex-col justify-between  text-orange-100">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-sm italic">{formatDate(created_at)}</p>
      </div>
      <div className="flex flex-col justify-between w-[70%]">
        <a href={svn_url} target="_blank">
          <span className="w-12 h-12 rounded-full bg-gray-800 inline-flex justify-center items-center text-gray-400 hover:text-gray-200 duration-300 cursor-pointer hover:bg-orange-700">
            <FaGithub />
          </span>
        </a>

        <p className="text-red-700 font-semibold text-sm max-sm:text-xs hover:text-gray-100 duration-300">
          Topics:{" "}
          <span className="font-normal">
            {topics && topics.join(", ").length > 50
              ? `${topics.join(", ").slice(0, 51)} ...`
              : topics.join(", ")}
          </span>
        </p>
        <p className="text-sm max-sm:text-xs hover:text-gray-100 duration-300">
          {description && description.length > 80
            ? `${description.slice(0, 81)} ...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default AllProjectCard;
