import React from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, onClick, className }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        `w-full rounded p-3 
        backdrop-blur-xl border border-[#ffffff3b]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;