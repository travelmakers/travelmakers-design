import { deviceSizes } from "../types/TmSize";

export type TmMedia = {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
};

export const DEFAULT_MEDIA: TmMedia = {
  mobile: `@media (max-width: ${deviceSizes.mobile}px)`,
  tablet: `@media (max-width: ${deviceSizes.tablet}px)`,
  desktop: `@media (max-width: ${deviceSizes.desktop}px)`,
  largeDesktop: `@media (max-width: ${deviceSizes.maxSize}px)`,
};
