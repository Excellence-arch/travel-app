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

const register = (values) => {
  return {
    type: "REGISTER",
    payload: values,
  };
};

const login = (values) => {
  return {
    type: "LOGIN",
    payload: values,
  };
};

export { light, dark, register, login };
