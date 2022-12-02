import { deviceSizes } from '../types/TmSize.js';

const DEFAULT_MEDIA = {
  mobile: `@media (max-width: ${deviceSizes.mobile}px)`,
  tablet: `@media (max-width: ${deviceSizes.tablet}px)`,
  desktop: `@media (max-width: ${deviceSizes.desktop}px)`,
  largeDesktop: `@media (max-width: ${deviceSizes.maxSize}px)`
};

export { DEFAULT_MEDIA };
//# sourceMappingURL=media.js.map
