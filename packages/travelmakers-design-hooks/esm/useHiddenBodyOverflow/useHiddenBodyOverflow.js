import { useEffect } from 'react';

const useHiddenBodyOverflow = (condition = true) => {
  useEffect(() => {
    if (condition) {
      document.body.style.cssText = `
      overflow-y: scroll;`;
    }
    return () => {
      document.body.style.top;
      document.body.style.cssText = "";
    };
  }, []);
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [condition]);
  return null;
};

export { useHiddenBodyOverflow as default, useHiddenBodyOverflow };
//# sourceMappingURL=useHiddenBodyOverflow.js.map
