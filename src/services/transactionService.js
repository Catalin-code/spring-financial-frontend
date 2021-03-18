import axios from "axios";

const API_URL = "http://localhost:8080/api/test/account/";

const makeTransaction = (accountNumber, targetAccount, funds) => {
  return axios.post(API_URL + "transaction", {
    accountNumber,
    targetAccount,
    funds,
  });
};

const getAccounts = (username) => {
  return axios.get(API_URL + "customerPid=" + username).then((response) => {
    return response.data;
  });
};

export default {
  makeTransaction,
  getAccounts,
};
