import axios from "axios";

/**
 * updateProfile
 *
 * @param {String} id - Our id given from the database.
 * @param {String} token - Our authentication token with the expiration.
 * @param {Object} data - Our new profile data.
 *
 * @return {Object} The status we received from the backend and the token / data ( our message ).
 * Api call to our login route.
 *
 * If we are successful, just return the token.
 *
 * If we get an error check what the error is for and return that.
 * The message is then displayed on our Authentication Page. If our token has run out, redirect to the login page.
 */
const updateProfile = async (id, token, data) => {
  return await axios
    // .put(`/users/${id}/profile`, data, {
    .put(
      `https://glorified-todo-backend.herokuapp.com/users/users/${id}/profile`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      const { token } = res.data;
      return {
        status: 200,
        token,
      };
    })
    .catch((err) => {
      // 401 for Unauthorized, 500 for something went wrong, 403 session has ended.
      if (err.response.status === 401 || err.response.status === 403) {
        return {
          status: 401,
          data: "Please login. Your session has ended.",
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
