'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TmSize = require('../types/TmSize.js');

const DEFAULT_MEDIA = {
  mobile: `@media (max-width: ${TmSize.deviceSizes.mobile}px)`,
  tablet: `@media (max-width: ${TmSize.deviceSizes.tablet}px)`,
  desktop: `@media (max-width: ${TmSize.deviceSizes.desktop}px)`,
  largeDesktop: `@media (max-width: ${TmSize.deviceSizes.maxSize}px)`
};

exports.DEFAULT_MEDIA = DEFAULT_MEDIA;
//# sourceMappingURL=media.js.map
