import axios from "axios";

/**
 * login
 *
 * @param {Object} credentials - username and password.
 *
 * Api call to our login route.
 *
 * If we are successful, just return the token.
 *
 * If we get an error check what the error is for and return that.
 * The message is then displayed on our Authentication Page.
 */
const login = async (credentials) => {
  axios
    .get("https://glorified-todo-backend.herokuapp.com/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  return await axios
    .post("https://glorified-todo-backend.herokuapp.com/login", credentials)
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
        // Something went wrong, we don't specify.
        return {
          status: 400,
          data: "Something went wrong",
        };
      }
    });
};

export default login;
