import React, { useState, useRef, useParams, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

import TransactionService from "../services/transactionService";
import AuthService from "../services/auth.service";
import authService from "../services/auth.service";
import getAccountData from "../data/AccountData";

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

const MakeTransaction = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const currentUser = AuthService.getCurrentUser();
  const baseUrl = "http://localhost:8080/api/test/account/customerPid";

  let [accountData, setAccountData] = useState([]);

  const getData = async (customerId) => {
    const request = await fetch(`${baseUrl}=${currentUser.username}`);

    if (request.ok) {
      const data = await request.json();
      console.log(data);
      setAccountData(data);
    }
  };

  useEffect(() => {
    getData(currentUser.username);
  }, []);

  const [accountNumber, setAccountNumber] = useState("");
  const [targetAccount, setTargetAccount] = useState("");
  const [funds, setFunds] = useState("");
  const [successful, setSuccessful] = useState("false");
  const [message, setMessage] = useState("");

  const onChangeAccountNumber = (e) => {
    const accountNumber = e.target.value;
    setAccountNumber(accountNumber);
  };

  const onChangeTargetAccount = (e) => {
    const targetAccount = e.target.value;
    setTargetAccount(targetAccount);
  };

  const onChangeFunds = (e) => {
    const funds = e.target.value;
    setFunds(funds);
  };

  const handleMakeTransaction = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      TransactionService.makeTransaction(
        accountNumber,
        targetAccount,
        funds
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

  console.log(accountNumber);

  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <Form onSubmit={handleMakeTransaction} ref={form}>
            <h3>New Transaction</h3>
            <div>
              <div className="form-group align-items-center">
                <label htmlFor="accountNumber">From</label>
                <div
                  style={{
                    padding: "3rem",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  {accountData.map((a, i) => (
                    <div>
                      <h4 style={{ lineHeight: "3rem" }}>{a.accountNumber}</h4>
                      <Input
                        key={i}
                        type="checkbox"
                        className="form-control"
                        name="accountNumber"
                        value={a.accountNumber}
                        onChange={onChangeAccountNumber}
                        validations={[required]}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group align-items-center">
                <label htmlFor="targetAccount">To</label>
                <Input
                  type="text"
                  className="form-control"
                  name="targetAccount"
                  value={targetAccount}
                  onChange={onChangeTargetAccount}
                  validations={[required]}
                  placeholder="Account number"
                />
              </div>
              <div className="form-group align-items-center">
                <label htmlFor="funds">Amount to transfer</label>
                <Input
                  type="number"
                  className="form-control"
                  name="funds"
                  value={funds}
                  onChange={onChangeFunds}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">
                  Make Transaction
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
};

export default MakeTransaction;
