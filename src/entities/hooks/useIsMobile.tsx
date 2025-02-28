import { useState, useEffect } from "react";
import { IMediaQuery } from "@/src/entities/types/media";

const useMediaQuery = (width: number): boolean => {
  const [matches, setMatches] = useState<IMediaQuery["matches"]>(false);

  useEffect(() => {
    function handleResize() {
      setMatches(window.innerWidth < width);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return matches;
};

export default useMediaQuery;
