import { useEffect, useState } from "react";


export function useIsMobile() {
  
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 517px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 517px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  return isMobile;
}