'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@emotion/react');
var React = require('react');
var TmProvider = require('../theme/TmProvider.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Global = ({ styles }) => {
  const theme = TmProvider.useTmTheme();
  return /* @__PURE__ */ React__default.createElement(react.Global, {
    styles: react.css(styles(theme))
  });
};

exports.Global = Global;
//# sourceMappingURL=Global.js.map
