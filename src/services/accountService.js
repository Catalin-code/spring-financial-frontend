import axios from "axios";

const API_URL = "http://localhost:8080/api/test/account/";

const createAccount = (
  customerPid,
  type,
  currency,
  amount,
  account_number,
  interest
) => {
  return axios.post(API_URL + "new-account", {
    customerPid,
    type,
    currency,
    amount,
    account_number,
    interest,
  });
};

export default {
  createAccount,
};
