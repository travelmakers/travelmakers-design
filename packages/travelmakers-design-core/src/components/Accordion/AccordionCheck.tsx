import React from "react";

export const AccordionCheck = (
  props: React.ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="12" fill="#D7D7D7" />
      <path d="M6 10.7681L10.1205 16L18 8" stroke="white" stroke-width="2" />
    </svg>
  );
};

AccordionCheck.displayName = "@travelmakers-design/core/AccordionCheck";
