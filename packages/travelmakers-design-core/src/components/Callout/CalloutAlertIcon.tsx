import React from "react";

interface Props {
  color?: string;
}
export const CalloutAlertIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z"
        fill={color ?? "#0D5E49"}
      />
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="13"
        rx="6.5"
        stroke={color ?? "#0D5E49"}
      />
    </svg>
  );
};

CalloutAlertIcon.displayName = "@travelmakers-design/core/CalloutAlertIcon";
