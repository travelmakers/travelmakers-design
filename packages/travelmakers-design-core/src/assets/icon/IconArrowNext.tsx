import * as React from "react";
import { SVGProps } from "react";
export const IconArrowNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.25}>
      <g clipPath="url(#clip0_472_1657)">
        <path
          d="M12.8431 10.3431L18.5 16L12.8431 21.6568"
          stroke={props.color ?? "#30373F"}
        />
      </g>
      <rect
        x={0.5}
        y={0.5}
        width={31}
        height={31}
        rx={15.5}
        stroke={props.color ?? "#30373F"}
      />
    </g>
    <defs>
      <clipPath id="clip0_472_1657">
        <rect width={16} height={16} fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
);
