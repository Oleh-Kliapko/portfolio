"use client";

import { MyInstagramLoader } from "@/helpers/SpinerLoader";
import Image from "next/image";
import { FC, useEffect, MouseEventHandler, useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { FaTimes } from "react-icons/fa";

interface ModalProps {
  projectId: number;
  imageUrl: string;
  onClose: () => void;
}

export const ImageModal: FC<ModalProps> = ({
  projectId,
  imageUrl,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      {loading && <MyInstagramLoader />}
      <div className={!loading ? "modal-content" : " w-0 h-0"}>
        {!loading && (
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        )}
        <Image
          src={imageUrl}
          alt="project screen"
          width={projectId === 3 || projectId === 4 ? 400 : 1000}
          height={projectId === 3 || projectId === 4 ? 1000 : 400}
          className="w-auto h-full object-cover"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
