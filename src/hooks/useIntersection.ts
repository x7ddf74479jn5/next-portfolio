import type { RefObject } from "react";
import { useEffect, useState } from "react";

const useIntersection = (ref: RefObject<HTMLElement>, options: IntersectionObserverInit): boolean => {
  const [isIntersect, setIsIntersect] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          setIsIntersect(true);
          observer.disconnect();
        }
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIsIntersect(false);
        observer.disconnect();
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [ref, options]);

  return isIntersect;
};

export default useIntersection;
