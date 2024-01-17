"use client";

import { FC, useEffect, MouseEventHandler, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const ImageModal: FC<ModalProps> = ({ imageUrl, onClose }) => {
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
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <Image
          src={imageUrl}
          alt="project screen"
          width={1000}
          height={1000}
          className="w-auto h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
