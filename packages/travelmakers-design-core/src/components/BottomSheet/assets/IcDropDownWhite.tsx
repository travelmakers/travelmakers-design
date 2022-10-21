import React from "react";

export const IcDropDownWhite = (
  props: React.ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m.5 14.31 7-7-7-7"
        stroke="#FFF"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

IcDropDownWhite.displayName = "@travelmakers-design/core/IcDropDownWhite";
