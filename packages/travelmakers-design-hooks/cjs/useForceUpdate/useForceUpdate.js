'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const reducer = (value) => (value + 1) % 1e6;
const useForceUpdate = () => {
  const [, update] = react.useReducer(reducer, 0);
  return update;
};

exports.useForceUpdate = useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map
