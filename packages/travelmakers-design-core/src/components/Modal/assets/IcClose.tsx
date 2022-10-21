import React from "react";

export const IcClose = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#30373F"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212" />
      </g>
    </svg>
  );
};

IcClose.displayName = "@travelmakers-design/core/IcClose";
