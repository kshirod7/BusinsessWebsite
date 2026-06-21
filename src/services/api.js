import axios from "axios";

const authApi =
"https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";

const referralApi =
"https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals";

export const loginUser = data =>
  axios.post(authApi, data);

export const getReferrals = (params, token) =>
  axios.get(referralApi, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
