import avatar from "./svgs/avatar.svg";

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
            // username,
            ...potentialUser,
            jwt: api.jwt,
            // profilePic: potentialUser.profilePic,
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
    const data = { username, jwt: api.jwt, profilePic: avatar };
    api.users.push({ ...data, password });
    return data;
  },
  updateProfile: (username, values) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        // api.users[i].key = value;
        api.users[i] = { ...potentialUser, ...values };
        return 200;
      }
      return 404;
    }
  },
  // changeKey: (username, key, value) => {
  // for (let i = 0; i < api.users.length; i++) {
  //   const potentialUser = api.users[i];
  //   if (username === potentialUser.username) {
  //     api.users[i].key = value;
  //     return 200;
  //   }
  //   return 404;
  // }
  // },
};

export default api;
