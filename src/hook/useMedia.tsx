import { useEffect, useState } from "react";

const useMedia = (media: string) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const changeMatch = () => {
      if (typeof window !== "undefined") {
        const { matches } = window.matchMedia(media);

        setMatch(matches);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", changeMatch);
    }
    changeMatch();
    return () => {
      if (typeof window !== "undefined") {
        return window.removeEventListener("resize", changeMatch);
      }
    };
  }, [media]);
  return match;
};

export default useMedia;
