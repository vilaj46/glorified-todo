import avatar from "./svgs/avatar.svg";

const User = (username, password) => ({
  username: username,
  password: password,
  profilePic: avatar,
  bio: "",
  company: "",
  location: "",
  email: "",
  website: "",
  twitter: "",
});

const api = {
  jwt: "12345",
  users: [
    {
      username: "vilaj46@gmail.com",
      password: "georgia46",
      profilePic: avatar,
      bio: "",
      company: "",
      location: "",
      email: "",
      website: "",
      twitter: "",
    },
  ],
  login: (username, password) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        const isValidPW = api.checkPW(password, potentialUser.password);
        if (isValidPW) {
          return {
            ...potentialUser,
            jwt: api.jwt,
          };
        } else {
          return 406;
        }
      }
    }

    return 404;
  },
  checkPW: (currentPW, actualPW) => {
    if (currentPW === actualPW) {
      return true;
    } else {
      return false;
    }
  },
  signup: (username, password) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        return 406;
      }
    }
    const newUser = User(username, password);
    const newUserToJson = { jwt: "12345" };
    Object.keys(newUser).forEach((k) => {
      if (k !== "password") {
        newUserToJson[k] = newUser[k];
      }
    });
    api.users.push(newUser);
    return newUserToJson;
  },
  updateProfile: (username, values) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        api.users[i] = { ...potentialUser, ...values };
        return 200;
      }
    }
    return 404;
  },
};

export default api;
