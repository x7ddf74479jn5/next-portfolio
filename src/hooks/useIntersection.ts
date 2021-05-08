import type { RefObject } from "react";
import { useEffect, useState } from "react";

const useIntersection = (ref: RefObject<HTMLElement>, options: IntersectionObserverInit): boolean => {
  // const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersect, setIsIntersect] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries: IntersectionObserverEntry[]) => {
        // setIntersectionObserverEntry(entries[0]);
        if (entries[0].isIntersecting) {
          setIsIntersect(true);
          observer.disconnect();
        }
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        // setIntersectionObserverEntry(null);
        setIsIntersect(false);
        observer.disconnect();
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [ref.current, options.threshold, options.root, options.rootMargin]);

  return isIntersect;
  // return intersectionObserverEntry;
};

export default useIntersection;
