import api from "../../../api/index.js";

export default (res) => {
  console.log(res);
  api
    .google(res)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// export default (res, credentials, actions, state) => {
//   api.google(credentials);
// };
