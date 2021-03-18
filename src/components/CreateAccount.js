import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

import AccountService from "../services/accountService";
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

const CreateAccount = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const currentUser = AuthService.getCurrentUser();

  const [customerPid, setCustomerPid] = useState("");
  const [type, setType] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [interest, setInterest] = useState("");
  const [successful, setSuccessful] = useState("false");
  const [message, setMessage] = useState("");

  const onChangeCustomerPid = (e) => {
    const customerPid = e.target.value;
    setCustomerPid(customerPid);
  };

  const onChangeType = (e) => {
    const type = e.target.value;
    setType(type);
  };

  const onChangeCurrency = (e) => {
    const currency = e.target.value;
    setCurrency(currency);
  };

  const onChangeAmount = (e) => {
    const amount = e.target.value;
    setAmount(amount);
  };

  const onChangeAccountNumber = (e) => {
    const accountNumber = e.target.value;
    setAccountNumber(accountNumber);
  };

  const onChangeInterest = (e) => {
    const interest = e.target.value;
    setInterest(interest);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AccountService.createAccount(
        customerPid,
        type,
        currency,
        amount,
        accountNumber,
        interest
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
            <Form onSubmit={handleCreateAccount} ref={form}>
              <h3>Create Account</h3>
              <div>
                <div className="form-group align-items-center">
                  <label htmlFor="customerPid">Customer Pid</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="customerPid"
                    value={customerPid}
                    onChange={onChangeCustomerPid}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="type">Type</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="type"
                    value={type}
                    onChange={onChangeType}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="currency">Currency</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="currency"
                    value={currency}
                    onChange={onChangeCurrency}
                    validations={[required]}
                  />
                </div>

                <div className="form-group align-items-center">
                  <label htmlFor="amount">Amount</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="amount"
                    value={amount}
                    onChange={onChangeAmount}
                    validations={[required]}
                  />
                </div>

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
                  <label htmlFor="interest">Interest</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="interest"
                    value={interest}
                    onChange={onChangeInterest}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    Open Account
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

export default CreateAccount;
