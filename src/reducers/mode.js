const initState = {
  darkMode: false,
};
const mode = (state = initState, action) => {
  switch (action.type) {
    case "DARK":
      return { ...state, darkMode: true };
    case "LIGHT":
      return { ...state, darkMode: false };
    default:
      return { ...state, darkMode: false };
  }
};

export default mode;
