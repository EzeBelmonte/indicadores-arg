import type React from "react";

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

  return (
    
    <div
      className={cn(`fixed inset-0 z-50
        flex justify-center items-center
        bg-black/70
        transition-opacity divide-gray-300 ease-in-out`,
        isOpen 
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={cn(`relative bg-white
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