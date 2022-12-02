import { useState, useCallback } from 'react';
import { useCallbackRef } from '../useCallbackRef/useCallbackRef.js';

const useLoading = (fn) => {
  const [loading, setLoading] = useState(false);
  const savedCallback = useCallbackRef(fn);
  const handler = useCallback(async (...args) => {
    setLoading(true);
    const result = await savedCallback(...args);
    setLoading(false);
    return result;
  }, [fn]);
  return [loading, handler];
};

export { useLoading };
//# sourceMappingURL=useLoading.js.map
