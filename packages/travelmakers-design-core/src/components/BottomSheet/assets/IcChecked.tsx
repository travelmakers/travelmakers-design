import React from "react";

export const IcChecked = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <circle fill="#30373F" cx="12" cy="12" r="12" />
        <path
          stroke="#FFF"
          stroke-width="2"
          d="m7.405 10.84 3.296 4.185 6.304-6.4"
        />
      </g>
    </svg>
  );
};

IcChecked.displayName = "@travelmakers-design/core/IcChecked";
