import { useRef, useMemo, useEffect } from 'react';
import { useRafState } from '../useRafState/useRafState.js';

const defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
const browser = typeof window !== "undefined";
const useResize = () => {
  const ref = useRef(null);
  const [rect, setRect] = useRafState(defaultState);
  const observer = useMemo(() => browser ? new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry) {
      setRect(entry.contentRect);
    }
  }) : null, []);
  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);
  return [ref, rect];
};

export { useResize };
//# sourceMappingURL=useResize.js.map
