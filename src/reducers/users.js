let dbUsers = [];
let online = null;

if (localStorage.allUsers) {
  dbUsers = JSON.parse(localStorage.allUsers);
}

if (localStorage.onlineUser) {
  online = JSON.parse(localStorage.onlineUser);
}

const initState = {
  full_name: "",
  email: "",
  phone: "",
  password: "",
  allUsers: dbUsers,
  onlineUser: online,
};
const users = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER":
      const newUser = action.payload;
      newUser.id = state.allUsers.length;
      newUser.booked = [];
      const foundEmail = state.allUsers.find(
        (val) => val.email === newUser.email,
      );
      if (!foundEmail) {
        localStorage.allUsers = JSON.stringify([
          ...state.allUsers,
          action.payload,
        ]);
        return {
          ...state,
          allUsers: [...state.allUsers, action.payload],
        };
      } else {
        throw "Email already exist";
      }
    case "LOGIN":
      const foundEmailnPassword = state.allUsers.find(
        (val) =>
          val.email === action.payload.email &&
          val.password === action.payload.password,
      );
      if (foundEmailnPassword) {
        return {
          ...state,
          onlineUser: foundEmailnPassword.id,
        };
      } else {
        // console.log("no");
        throw "Incorrect Login details";
      }
    default:
      return {
        ...state,
      };
  }
};

export default users;
