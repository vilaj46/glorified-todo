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
const updateProfile = async (id, token, data) => {
  return await axios
    .put(`/users/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return {
        status: 200,
      };
    })
    .catch((err) => {
      // 401 for Unauthorized, 500 for something went wrong.
      console.log(err.response);
      if (err.response.status === 401) {
        return {
          status: 401,
          data: "Your session has timed out.",
        };
      } else {
        return {
          status: 500,
          data: "Something went wrong.",
        };
      }
    });
};

export default updateProfile;
