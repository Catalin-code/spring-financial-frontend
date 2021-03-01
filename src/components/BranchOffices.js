import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    const baseUrl = "http://localhost:8080/api/locations/"
    const [branchOfficeData, setBranchOfficeData] = useState([]);

    const getData = async () => {
        try {
          const { data } = await axios.get(baseUrl)
          setBranchOfficeData(data);
        } catch (err) {
          console.log(err.message);
        }
      };

      useEffect(() => {
         getData();
      }, []);

      const renderBranchOffice = (b) =>{
          console.log(b);
          <>
            <p>{b.name}</p>
            <p>{b.address}</p>
          </>
      }

    return (
        <>
            <Navbar />
            <Section>
                <Container>
                  <div>
                    {branchOfficeData.map(renderBranchOffice)}
                  </div>
                </Container>
            </Section>
            <Footer/>
        </>
    );
}

export default BranchOffices;
