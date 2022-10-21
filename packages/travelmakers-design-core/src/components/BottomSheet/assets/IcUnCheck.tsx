import React from "react";

export const IcUnCheck = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <circle fill="#D7D7D7" cx="10" cy="10" r="10" />
        <path
          stroke="#FFF"
          stroke-width="2"
          d="m6.17 9.033 2.748 3.488 5.253-5.333"
        />
      </g>
    </svg>
  );
};

IcUnCheck.displayName = "@travelmakers-design/core/IcUnCheck";
