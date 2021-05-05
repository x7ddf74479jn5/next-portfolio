import React from "react";

const useMount = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted } as const;
};

export default useMount;
