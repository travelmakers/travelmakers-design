import { useReducer } from 'react';

const reducer = (value) => (value + 1) % 1e6;
const useForceUpdate = () => {
  const [, update] = useReducer(reducer, 0);
  return update;
};

export { useForceUpdate };
//# sourceMappingURL=useForceUpdate.js.map
