import * as React from "react";
import { SVGProps } from "react";

export const IconMobileMypage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="translate(1 1)"
      stroke="#30373F"
      fill="none"
      fill-rule="evenodd"
    >
      <circle
        stroke-linecap="round"
        stroke-linejoin="round"
        cx="6"
        cy="3"
        r="3"
      />
      <path d="M0 14.75v-.5C0 11.35 2.35 9 5.25 9h1.5C9.65 9 12 11.35 12 14.25v.682" />
    </g>
  </svg>
);
