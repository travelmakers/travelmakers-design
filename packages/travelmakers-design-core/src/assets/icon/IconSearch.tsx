import * as React from "react";
import { SVGProps } from "react";

export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
      <circle
        stroke="#30373F"
        stroke-linecap="round"
        stroke-linejoin="round"
        cx="4.875"
        cy="4.875"
        r="4.875"
      />
      <path fill="#30373F" d="m7.672 8.379.707-.707 4.95 4.95-.708.706z" />
    </g>
  </svg>
);
