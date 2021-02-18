import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { getUserData } from "../data/UserData";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
`;
const Container = styled.div`
  padding: 15rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  color: white;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

function UserDetails() {
  let { pid } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPid, setUserPid] = useState(pid);
  const [userImage, setUserImage] = useState(null);

  const getData = async () => {
    try {
      const data = await getUserData(userPid);
      setUserData(data);
      console.log(data);
      setUserImage(`/userImages/user${data.id}.jpg`);
      console.log(userImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserData();
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <ColumnLeft>
            {userData !== null ? (
              <div>
                <h1>First Name</h1>
                <p>{userData.firstName}</p>
                <hr />
                <h1>Last Name</h1>
                <p>{userData.lastName}</p>
                <hr />
                <h1>Date of birth</h1>
                <p>{userData.dob}</p>
                <hr />
                <h1>Age</h1>
                <p>{userData.age}</p>
                <hr />
                <h1>Address</h1>
                <p>{userData.address}</p>
                <hr />
                <h1>Email</h1>
                <p>{userData.email}</p>
                <hr />
                <h1>Gender</h1>
                <p>{userData.gender}</p>
                <hr />
                <h1>Id Issue Date</h1>
                <p>{userData.id_issued}</p>
                <hr />
                <h1>Id Expiry Date</h1>
                <p>{userData.id_expiry}</p>
                <hr />
              </div>
            ) : null}
          </ColumnLeft>
          <ColumnRight>
            <img src={userImage} alt="" />
          </ColumnRight>
        </Container>
        <div style={{ textAlign: "center" }}>
          <Button variant="danger" size="lg" style={{ marginRight: "3rem" }}>
            View Accounts
          </Button>
        </div>
      </Section>
    </>
  );
}

export default UserDetails;
