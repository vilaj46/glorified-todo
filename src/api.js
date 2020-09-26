import happy from "./svgs/happy.png";
import unhappy from "./svgs/unhappy.png";

const api = {
  jwt: "12345",
  users: [
    {
      username: "vilaj46@gmail.com",
      password: "georgia46",
      profilePic: unhappy,
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
    const data = { username, jwt: api.jwt, profilePic: happy };
    api.users.push({ ...data, password });
    return data;
  },
  changeBio: (username, newBio) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        api.users[i].bio = newBio;
        return 200;
      }
      return 404;
    }
  },
};

export default api;
