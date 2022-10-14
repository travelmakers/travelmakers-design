import React from "react";

export const BackIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <path stroke={props.color ?? "#FFF"} d="M12 22.5 1.5 12 12 1.5" />
        <path fill={props.color ?? "#FFF"} d="M2.25 11.5h21v1h-21z" />
      </g>
    </svg>
  );
};

BackIcon.displayName = "@travelmakers-design/core/BackIcon";
