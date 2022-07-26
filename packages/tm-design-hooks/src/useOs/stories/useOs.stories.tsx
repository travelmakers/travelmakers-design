import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@tm-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
