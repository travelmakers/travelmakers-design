import React from "react";

export const IcCheckSelectedBeige = (
  props: React.ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      {...props}
    >
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g transform="translate(-73 -67) translate(7 67) translate(66)">
              <circle cx="15" cy="15" r="15" fill="#C1A485" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M9.256 13.55L13.376 18.781 21.256 10.781"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

IcCheckSelectedBeige.displayName =
  "@travelmakers-design/core/IcCheckSelectedBeige";
