import { useLayoutEffect } from "react";

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      return (document.body.style.overflow = originalStyle);
    };
  }, []);
};

export default useLockBodyScroll;
