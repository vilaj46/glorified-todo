import axios from "axios";

export default {
  signup: (credentials) => {
    axios.post("/signup", credentials).then((response) => {
      return response;
    });
  },
};
