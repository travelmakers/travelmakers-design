import { createContext, useContext } from 'react';
import createCache from '@emotion/cache';
import { useCoEmotionOptions } from '../theme/TmProvider.js';

const { getCache } = (() => {
  let cache;
  function _getCache(options) {
    if (cache === void 0) {
      cache = createCache(options || { key: "co", prepend: true });
    }
    return cache;
  }
  return { getCache: _getCache };
})();
const context = createContext(void 0);
function useCache() {
  const options = useCoEmotionOptions();
  return useContext(context) || getCache(options);
}

export { getCache, useCache };
//# sourceMappingURL=CacheProvider.js.map
