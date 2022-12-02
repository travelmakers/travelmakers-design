'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useRafState = (initialState) => {
  const frame = react.useRef(0);
  const [state, setState] = react.useState(initialState);
  const setRafState = react.useCallback((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);
  return [state, setRafState];
};

exports.useRafState = useRafState;
//# sourceMappingURL=useRafState.js.map
