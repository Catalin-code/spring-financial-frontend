import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getBranchOfficeData from "../data/BranchOfficeData";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    const [branchOfficeData, setBranchOfficeData] = useState(null);

    const getData = async () => {
        try {
          const data = await getBranchOfficeData();
          setBranchOfficeData(data);
          console.log(branchOfficeData);
        } catch (err) {
          console.log(err.message);
        }
      };

      useEffect(() => {
        getBranchOfficeData();
        getData();
      });
    

    return (
        <>
            <Navbar />
            <Section>
                <Container>
                  
                </Container>
            </Section>
            <Footer/>
        </>
    );
}

export default BranchOffices;
