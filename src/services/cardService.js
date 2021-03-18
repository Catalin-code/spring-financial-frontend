import axios from "axios";

const API_URL = "http://localhost:8080/api/test/card/";

const createCard = (
  accountNumber,
  cardNumber,
  accountType,
  expirationDate,
  cvv,
  customerFirstName,
  customerLastName,
  contactless
) => {
  return axios.post(API_URL + "new-card", {
    accountNumber,
    cardNumber,
    accountType,
    expirationDate,
    cvv,
    customerFirstName,
    customerLastName,
    contactless,
  });
};

export default {
  createCard,
};
