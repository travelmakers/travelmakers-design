const size = (props) => {
  if (typeof props.size === "number") {
    return props.size;
  }
  return props.sizes[props.size] || props.size || props.sizes.medium;
};

export { size };
//# sourceMappingURL=size.js.map
