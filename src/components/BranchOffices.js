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
  grid-template-rows: 150px;
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


    return (
        <>
            <Navbar />
            <Section>
                <Container>
                    {branchOfficeData.map(b => 
                    <div className="card border-primary mb-3" style={{ backgroundColor: "#000d1a" }}>
                      <div className="card-header">{b.name}</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title" style={{ color: "white"}}>{b.address}</h5>
                      </div>
                    </div>
                    )}
                </Container>
            </Section>
            <Footer/>
        </>
    );
}

export default BranchOffices;
