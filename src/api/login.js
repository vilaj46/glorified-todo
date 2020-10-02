import axios from "axios";

const login = async (credentials) => {
  return await axios
    .post("/login", credentials)
    .then((res) => {
      // Successful returns the token.
      return {
        status: 200,
        token: res.data,
      };
    })
    .catch((err) => {
      // 406, 400
      const { status } = err.response;
      if (status === 406) {
        // Username not found or incorrect password.
        if (err.response.data === "username") {
          return {
            status: 406,
            data: "Username not found.",
          };
        } else {
          return {
            status: 406,
            data: "Incorrect password.",
          };
        }
      } else {
        // Something went wrong.
        return {
          status: 400,
          data: "Something went wrong",
        };
      }
    });
};

export default login;
