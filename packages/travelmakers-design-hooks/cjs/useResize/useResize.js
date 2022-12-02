'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var useRafState = require('../useRafState/useRafState.js');

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
  const ref = react.useRef(null);
  const [rect, setRect] = useRafState.useRafState(defaultState);
  const observer = react.useMemo(() => browser ? new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry) {
      setRect(entry.contentRect);
    }
  }) : null, []);
  react.useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);
  return [ref, rect];
};

exports.useResize = useResize;
//# sourceMappingURL=useResize.js.map
