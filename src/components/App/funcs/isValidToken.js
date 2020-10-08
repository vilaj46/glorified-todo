import jwt_decode from "jwt-decode";

/**
 * isValidToken
 *
 * @param {String} - Our auth token.
 *
 * Checks if the token is expired.
 * If the token isn't expired its a valid one, return true.
 *
 * Otherwise, its valid. Return false.
 */
export default (token) => {
  if (token.length > 0) {
    const decoded = jwt_decode(token);
    if (Date.now() <= decoded.exp * 1000) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
