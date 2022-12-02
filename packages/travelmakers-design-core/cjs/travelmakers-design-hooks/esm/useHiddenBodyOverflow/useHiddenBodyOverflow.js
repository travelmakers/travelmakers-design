'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useHiddenBodyOverflow = (condition = true) => {
  React.useEffect(() => {
    if (condition) {
      document.body.style.cssText = `
      overflow-y: scroll;`;
    }
    return () => {
      document.body.style.top;
      document.body.style.cssText = "";
    };
  }, []);
  React.useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [condition]);
  return null;
};

exports["default"] = useHiddenBodyOverflow;
exports.useHiddenBodyOverflow = useHiddenBodyOverflow;
//# sourceMappingURL=useHiddenBodyOverflow.js.map
