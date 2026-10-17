import React from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}


const Section = ({ children, className, id, onClick }: SectionProps) => {

  return (
    <section
      id={id}
      // scroll-mt-24 es el margen extra por el Navbar
      className={cn(
        `w-full mx-auto max-w-[1024px]
        scroll-mt-24 p-4`,
        className
      )}
      onClick={onClick}
    >

      {children}

    </section>
    
  )
};

export default Section;