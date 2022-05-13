let onlineMode;

if (localStorage.darkMode) {
  onlineMode = JSON.parse(localStorage.darkMode);
} else {
  onlineMode = false;
}
const initState = {
  darkMode: onlineMode,
};
const mode = (state = initState, action) => {
  switch (action.type) {
    case "DARK":
      localStorage.darkMode = JSON.stringify(true);
      return { ...state, darkMode: true };
    case "LIGHT":
      localStorage.darkMode = JSON.stringify(false);
      return { ...state, darkMode: false };
    default:
      // localStorage.darkMode = JSON.stringify(false);
      return { ...state };
  }
};

export default mode;
