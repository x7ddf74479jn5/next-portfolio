import React from "react";

import { MIN_PC_WIDTH_PX } from "../utils/constants";
import useMount from "./useMount";

const isPCWindowSize = () => {
  if (typeof window !== "undefined") {
    if (window.matchMedia(`(min-width: ${MIN_PC_WIDTH_PX}px)`).matches) {
      return true;
    }
  }

  return false;
};

export default function useMedia() {
  const [isPC, setIsPC] = React.useState(isPCWindowSize());
  const { mounted } = useMount();
  const resizeEvent = React.useCallback(() => {
    setIsPC(isPCWindowSize());
  }, []);

  React.useEffect(() => {
    setIsPC(isPCWindowSize());

    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isPC, mounted } as const;
}
