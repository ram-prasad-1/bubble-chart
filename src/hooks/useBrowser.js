import { useLayoutEffect, useState } from 'react';

const useBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useLayoutEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
};

export default useBrowser;
