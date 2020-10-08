import jwt_decode from "jwt-decode";

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
