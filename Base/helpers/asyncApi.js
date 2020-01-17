import usersApi from "../api/api";

const asyncApi = async () => {
  const apiGet = await usersApi().getMatch();
  return apiGet.data;
};

export default asyncApi;
