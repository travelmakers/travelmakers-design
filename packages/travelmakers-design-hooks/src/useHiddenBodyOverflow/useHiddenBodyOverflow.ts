import { useEffect } from "react";

export const useHiddenBodyOverflow = (condition = true) => {
  function preventDefault(e: any) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }
  function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefault);
  }

  // 백 오버레이 스크롤 막기
  useEffect(() => {
    if (condition) {
      document.body.style.cssText = `
      overflow-y: scroll;`;
    }
    return () => {
      const scrollY = document.body.style.top;
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

export default useHiddenBodyOverflow;
