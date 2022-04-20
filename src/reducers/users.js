const initState = {
  full_name: "",
  email: "",
  phone: "",
  password: "",
};
const users = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        full_name: action.payload.full_name,
        email: action.payload.email,
        phone: action.payload.phone,
        password: action.payload.password,
      };
    default:
      return {
        ...state,
      };
  }
};

export default users;
