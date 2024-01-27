import { FC } from "react";
import Image from "next/image";

import { Certificates } from "@/constants";

export const CertificatesList: FC = () => {
  return (
    <div className="max-lg:w-[60%] w-[80%] flex flex-wrap gap-5">
      {Certificates.map(({ id, title, link, image }) => (
        <div key={id} className="flex items-center w-40 h-auto max-md:w-20">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="rounded-md w-full h-full object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
