import React, { useState } from "react";

import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers-design/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};
