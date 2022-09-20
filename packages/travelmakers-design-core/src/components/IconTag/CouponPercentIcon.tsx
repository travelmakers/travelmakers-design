import React from "react";

export const CouponPercentIcon = (
  props: React.ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z"
        fill="#03936E"
      />
      <circle
        r="0.935672"
        transform="matrix(1 0 0 -1 6.28567 6.28562)"
        stroke="white"
        stroke-width="0.7"
      />
      <circle
        r="0.935672"
        transform="matrix(1 0 0 -1 9.71432 9.71433)"
        stroke="white"
        stroke-width="0.7"
      />
      <path d="M10 5H11L6 11H5L10 5Z" fill="white" />
    </svg>
  );
};

CouponPercentIcon.displayName = "@travelmakers-design/core/CouponPercentIcon";
