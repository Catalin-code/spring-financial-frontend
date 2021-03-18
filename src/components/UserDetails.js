import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getUserData } from "../data/UserData";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

import AuthService from "../services/auth.service";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
`;
const Container = styled.div`
  padding: 30rem calc((100vw - 1300px) / 3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px;
  color: white;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

var divStyle = {
  marginRight: "3rem",
  width: "11rem",
};

const Container1 = styled.div`
  padding-top: 10rem;
  color: white;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 0.1;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(40%);
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

const UserDetails = () => {
  const currentUser = AuthService.getCurrentUser();
  let isAdmin = "false";
  if (currentUser.roles[0] === "ROLE_ADMIN") {
    isAdmin = "true";
  }
  if (isAdmin === "true") {
    return (
      <>
        <Navbar />
        <Section>
          <Container1>
            <div style={{ textAlign: "center" }}>
              <h2>Employee Operations</h2>
            </div>
          </Container1>
          <Container>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="danger"
                size="lg"
                style={{ marginRight: "3rem" }}
                href={`/register`}
              >
                Add customer
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="danger"
                size="lg"
                style={{ marginRight: "3rem" }}
                href={`/new-account`}
              >
                Open Account
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="danger"
                size="lg"
                style={divStyle}
                href={`/new-card`}
              >
                Issue Card
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="danger"
                size="lg"
                style={{ marginRight: "3rem" }}
                href={``}
              >
                Close Account
              </Button>
            </div>
          </Container>
        </Section>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <ColumnLeft>
            <div>
              <h1>First Name</h1>
              <p>{currentUser.firstName}</p>
              <hr />
              <h1>Last Name</h1>
              <p>{currentUser.lastName}</p>
              <hr />
              <h1>Date of birth</h1>
              <p>{currentUser.dob}</p>
              <hr />
              <h1>Address</h1>
              <p>{currentUser.address}</p>
              <hr />
              <h1>Email</h1>
              <p>{currentUser.email}</p>
              <hr />
              <h1>Gender</h1>
              <p>{currentUser.gender}</p>
              <hr />
              <h1>Id Issue Date</h1>
              <p>{currentUser.idIssued}</p>
              <hr />
              <h1>Id Expiry Date</h1>
              <p>{currentUser.idExpiry}</p>
              <hr />
            </div>
          </ColumnLeft>
          <ColumnRight>
            {currentUser !== null ? (
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="danger"
                  size="lg"
                  style={{ marginRight: "3rem" }}
                  href={`/account/${currentUser.username}`}
                >
                  View Accounts
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  style={{ marginRight: "3rem" }}
                  href={`/make-transaction`}
                >
                  Make Transaction
                </Button>
              </div>
            ) : null}
          </ColumnRight>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default UserDetails;
