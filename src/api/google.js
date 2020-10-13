import axios from "axios";

const google = async (res) => {
  axios
    .post("/auth/google", { token: res.tokenId })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export default google;
