'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createCache = require('@emotion/cache');
var TmProvider = require('../theme/TmProvider.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var createCache__default = /*#__PURE__*/_interopDefaultLegacy(createCache);

const { getCache } = (() => {
  let cache;
  function _getCache(options) {
    if (cache === void 0) {
      cache = createCache__default(options || { key: "co", prepend: true });
    }
    return cache;
  }
  return { getCache: _getCache };
})();
const context = React.createContext(void 0);
function useCache() {
  const options = TmProvider.useCoEmotionOptions();
  return React.useContext(context) || getCache(options);
}

exports.getCache = getCache;
exports.useCache = useCache;
//# sourceMappingURL=CacheProvider.js.map
