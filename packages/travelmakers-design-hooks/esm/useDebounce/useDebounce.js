import { useTimeoutFn } from '../useTimeoutFn/useTimeoutFn.js';
import { useUpdateEffect } from '../useUpdateEffect/useUpdateEffect.js';

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFn(fn, ms);
  useUpdateEffect(run, deps);
  return clear;
};

export { useDebounce };
//# sourceMappingURL=useDebounce.js.map
