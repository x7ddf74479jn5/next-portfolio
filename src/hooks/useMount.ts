import React from "react";

const useMount = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted } as const;
};

export default useMount;
