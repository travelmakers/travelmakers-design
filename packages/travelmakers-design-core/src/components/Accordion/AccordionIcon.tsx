import React from "react";

export const AccordionIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#30373F"
        stroke-width="2"
        d="m3 9 13 14L29 9"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

AccordionIcon.displayName = "@travelmakers-design/core/AccordionIcon";
