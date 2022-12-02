import { useRef, useEffect } from 'react';

const useUpdateEffect = (effect, deps) => {
  const isFirst = useRef(true);
  useEffect(() => {
    if (!isFirst.current) {
      return effect();
    }
    isFirst.current = false;
  }, deps);
};

export { useUpdateEffect };
//# sourceMappingURL=useUpdateEffect.js.map
