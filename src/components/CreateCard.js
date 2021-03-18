import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

import CardService from "../services/cardService";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This filed is required !
      </div>
    );
  }
};

const Section = styled.section`
  width: 100%;
  height: 80%;
  padding: 4rem 0rem;
  background-color: #000d1a;
  padding-left: 20%;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1000px;
  color: white;
  margin-top: 5%;
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CreateCard = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const currentUser = AuthService.getCurrentUser();

  const [accountNumber, setAccountNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [contactless, setContactless] = useState("false");
  const [successful, setSuccessful] = useState("false");
  const [message, setMessage] = useState("");

  const onChangeAccountNumber = (e) => {
    const accountNumber = e.target.value;
    setAccountNumber(accountNumber);
  };

  const onChangeCardNumber = (e) => {
    const cardNumber = e.target.value;
    setCardNumber(cardNumber);
  };

  const onChangeAccountType = (e) => {
    const accountType = e.target.value;
    setAccountType(accountType);
  };

  const onChangeExpirationDate = (e) => {
    const expirationDate = e.target.value;
    setExpirationDate(expirationDate);
  };

  const onChangeCvv = (e) => {
    const cvv = e.target.value;
    setCvv(cvv);
  };

  const onChangeCustomerFirstName = (e) => {
    const customerFirstName = e.target.value;
    setCustomerFirstName(customerFirstName);
  };

  const onChangeCustomerLastName = (e) => {
    const customerLastName = e.target.value;
    setCustomerLastName(customerLastName);
  };

  const onChangeContactless = (e) => {
    const contactless = e.target.checked;
    setContactless(contactless);
  };

  const handleCreateCard = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      CardService.createCard(
        accountNumber,
        cardNumber,
        accountType,
        expirationDate,
        cvv,
        customerFirstName,
        customerLastName,
        contactless
      ).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  console.log(contactless);

  let isAdmin = "false";
  if (currentUser.roles[0] === "ROLE_ADMIN") {
    isAdmin = "true";
  }
  if (isAdmin === "true") {
    return (
      <>
        <Navbar />
        <Section>
          <Container>
            <Form onSubmit={handleCreateCard} ref={form}>
              <h3>Issue Card</h3>
              <div>
                <div className="form-group align-items-center">
                  <label htmlFor="accountNumber">Account Number</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={onChangeAccountNumber}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="cardNumber">Card Number</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={onChangeCardNumber}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="accountType">Account Type</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="accountType"
                    value={accountType}
                    onChange={onChangeAccountType}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="expirationDate"
                    value={expirationDate}
                    onChange={onChangeExpirationDate}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="cvv">Cvv</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="cvv"
                    value={cvv}
                    onChange={onChangeCvv}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="customerFirstName">First Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="customerFirstName"
                    value={customerFirstName}
                    onChange={onChangeCustomerFirstName}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="customerLastName">Last Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="customerLastName"
                    value={customerLastName}
                    onChange={onChangeCustomerLastName}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="contactless">Contactless</label>
                  <Input
                    type="checkbox"
                    className="form-control"
                    name="contactless"
                    value={contactless}
                    onChange={onChangeContactless}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    Create Card
                  </button>
                </div>
              </div>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </Container>
        </Section>
        <Footer />
      </>
    );
  }
};

export default CreateCard;
