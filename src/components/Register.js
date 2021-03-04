import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
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

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [idIssued, setIdIssued] = useState("");
  const [idExpiry, setIdExpiry] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState("false");
  const [message, setMessage] = useState("");

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeDob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeIdIssued = (e) => {
    const idIssued = e.target.value;
    setIdIssued(idIssued);
  };

  const onChangeIdExpiry = (e) => {
    const idExpiry = e.target.value;
    setIdExpiry(idExpiry);
  };

  const onChangeGender = (e) => {
    const gender = e.target.value;
    setGender(gender);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(
        firstName,
        lastName,
        dob,
        address,
        email,
        idIssued,
        idExpiry,
        gender,
        username,
        password
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

  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <Form onSubmit={handleRegister} ref={form}>
            <h3>Register</h3>
            <div>
              <div className="form-group align-items-center">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={onChangeFirstName}
                  validations={[required, vusername]}
                  placeholder="Enter First Name"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeLastName}
                  validations={[required, vusername]}
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="dob">Date of Birth</label>
                <Input
                  type="text"
                  className="form-control"
                  name="dob"
                  value={dob}
                  onChange={onChangeDob}
                  validations={[required]}
                  placeholder="Enter Date of Birth"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="address">Address</label>
                <Input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={onChangeAddress}
                  validations={[required]}
                  placeholder="Enter Address"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  placeholder="Enter Email"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="idIssued">Id issued Date</label>
                <Input
                  type="text"
                  className="form-control"
                  name="idIssued"
                  value={idIssued}
                  onChange={onChangeIdIssued}
                  validations={[required]}
                  placeholder="Enter Id issued Date"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="idExpiry">Id expiry Date</label>
                <Input
                  type="text"
                  className="form-control"
                  name="idExpiry"
                  value={idExpiry}
                  onChange={onChangeIdExpiry}
                  validations={[required]}
                  placeholder="Enter Id expiry Date"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="gender">Gender</label>
                <Input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={onChangeGender}
                  validations={[required]}
                  placeholder="Enter Gender"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="username">PID</label>
                <Input
                  type="number"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                  placeholder="Enter PID"
                />
              </div>

              <div className="form-group align-items-center">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Enter Password"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">
                  Register Customer
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

export default Register;
