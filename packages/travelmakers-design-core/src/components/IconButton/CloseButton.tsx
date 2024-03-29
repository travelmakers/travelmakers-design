import { IconButton, IconButtonProps } from "./IconButton";
import React, { forwardRef } from "react";

import { CloseIcon } from "./CloseIcon";

export type CloseButtonProps = Omit<IconButtonProps<"button">, "children">;

type CloseButtonComponent = (props: CloseButtonProps) => React.ReactElement;

export const CloseButton: CloseButtonComponent & { displayName?: string } =
  forwardRef<HTMLButtonElement, CloseButtonProps>(
    (
      { size = "medium", variant = "primary", ...props }: CloseButtonProps,
      ref
    ) => {
      return (
        <IconButton size={size} variant={variant} ref={ref} {...props}>
          <CloseIcon />
        </IconButton>
      );
    }
  );

CloseButton.displayName = "@travelmakers-design/core/CloseButton";
