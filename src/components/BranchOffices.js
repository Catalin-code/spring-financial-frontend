import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getBranchOfficeData from "../data/BranchOfficeData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

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
    grid-template-columns:1fr;
  }
`;


function BranchOffices() {
    const baseUrl = "http://localhost:8080/api/locations/1"
    const [branchOfficeData, setBranchOfficeData] = useState({});
    const getData = async () => {
        try {
          const response = await axios.get(baseUrl)
          setBranchOfficeData(response.data);
          console.log(response);
          console.log(branchOfficeData);
        } catch (err) {
          console.log(err.message);
        }
      };

      useEffect(() => {
         getData();
      }, []);
    

    return (
        <>
            <Navbar />
            <Section>
                <Container>
                  <div>
                    <p>{branchOfficeData.name}</p>
                    {console.log(branchOfficeData)}
                  </div>
                </Container>
            </Section>
            <Footer/>
        </>
    );
}

export default BranchOffices;
