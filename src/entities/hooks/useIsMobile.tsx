import { useState, useEffect } from "react";

function useMediaQuery(query: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMatches(window.innerWidth < query);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
