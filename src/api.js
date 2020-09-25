const api = {
  jwt: "12345",
  users: [
    {
      username: "vilaj46@gmail.com",
      password: "georgia46",
    },
  ],
  login: (username, password) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        const response = api.checkPW(password, potentialUser.password);
        return response;
      }
    }

    return 404;
  },
  checkPW: (currentPW, actualPW) => {
    if (currentPW === actualPW) {
      return api.jwt;
    } else {
      return 406;
    }
  },
  signup: (username, password) => {
    for (let i = 0; i < api.users.length; i++) {
      const potentialUser = api.users[i];
      if (username === potentialUser.username) {
        return 406;
      }
    }

    api.users.push({ username, password });
    return api.jwt;
  },
};

export default api;
