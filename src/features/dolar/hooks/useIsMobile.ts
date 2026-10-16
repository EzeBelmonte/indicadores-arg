import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 400px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");

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