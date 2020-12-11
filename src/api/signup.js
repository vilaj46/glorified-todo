import axios from "axios";

/**
 * signup
 *
 * @param {Object} credentials - username, email, password.
 *
 * Api call to our signup route.
 *
 * If we are successful, just return the token.
 *
 * If we get an error check what the error is for and return that.
 * The message is then displayed on our Authentication Page.
 */
const signup = async (credentials) => {
  return await axios
    .post("https://glorified-todo-backend.herokuapp.com/signup", credentials)
    .then((response) => {
      // Successful returns the token.
      return {
        status: 200,
        token: response.data,
      };
    })
    .catch((err) => {
      // 500, 406, 400
      const { status } = err.response;
      console.log(status);
      if (status === 406) {
        // Figure out if it is username, email, or both.
        const { data } = err.response;
        const splitData = data.split(" ");
        return {
          status: 406,
          data: [406, ...splitData],
        };
      } else {
        // Something went wrong.
        return {
          status: 500,
          data: "Something went wrong",
        };
      }
    });
};

export default signup;
