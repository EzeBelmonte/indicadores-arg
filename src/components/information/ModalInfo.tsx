import type React from "react";
import { useEffect } from "react";

import { cn } from "@/utils/cn";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const ModalInfo = ({
  isOpen,
  onClose,
  children,
}: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    
    <div
      className={cn(`fixed inset-0 z-50
        flex justify-center items-center
        bg-black/90
        transition-opacity divide-gray-300 ease-in-out`,
        isOpen 
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={cn(`relative bg-white/95
          max-w-[90%] max-h-[90%] p-3
          overflow-y-auto rounded
          transition-all duration-300 ease-in-out`,
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>

  );
}

export default ModalInfo;