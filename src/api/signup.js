import axios from "axios";

const signup = async (credentials) => {
  return await axios
    .post("/signup", credentials)
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
