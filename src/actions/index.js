const light = (val) => {
  return {
    type: "LIGHT",
    payload: val,
  };
};

const dark = (val) => {
  return {
    type: "DARK",
    payload: val,
  };
};

export { light, dark };
