// import { create } from "apisauce";

// export const api = create({
//   baseURL: "http://37284119.ngrok.io/gamesList"
// });

import { create } from "apisauce";

const config = {
  baseURL: "http://37284119.ngrok.io/gamesList"
};

const usersApi = () => {
  const { get } = create(config);

  const getMatch = () => get();

  return {
    getMatch
  };
};

export default usersApi;
