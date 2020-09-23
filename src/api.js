const api = {
  jwt: "12345",
  users: [
    {
      username: "vilaj46@gmail.com",
      password: "georgia46",
    },
  ],
  post: (username, password) => {
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
};

export default api;
