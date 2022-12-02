import { useRef, useState, useCallback } from 'react';

const useRafState = (initialState) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);
  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);
  return [state, setRafState];
};

export { useRafState };
//# sourceMappingURL=useRafState.js.map
