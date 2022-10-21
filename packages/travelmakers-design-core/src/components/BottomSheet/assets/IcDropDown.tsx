import React from "react";

export const IcDropDown = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.423 5.587 9 12.573l6.577-6.986"
        stroke="#30373F"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

IcDropDown.displayName = "@travelmakers-design/core/IcDropDown";
