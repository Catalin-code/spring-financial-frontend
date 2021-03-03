import React from 'react';
import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-template-rows: 400px;
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
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Contact() {
    return (
        <>
            <Navbar />
            <Section>
                <Container>
                    <ColumnLeft>
                        <div>
                            <h1>Contact</h1>
                        </div>
                    </ColumnLeft>
                    <ColumnRight>
                        <div>
                            <h5 style={{ fontWeight: "bold"}}>By phone</h5>
                            <p>*0606 - for any mobile telecomunication company in Romania</p>
                            <p>004002130633001 - for international calls</p>
                            <h5 style={{ fontWeight: "bold"}}>Send us a message</h5>
                            <p>contact@springfinancial.com</p>
                            <h5 style={{ fontWeight: "bold"}}>You can always find us at any of our branch offices</h5>
                            <a href="/branch-offices">Bucharest</a><br/>
                            <a href="/branch-offices">Ploiesti</a><br/>
                            <a href="/branch-offices">Calarasi</a><br/>
                        </div>
                    </ColumnRight>
                </Container>
            </Section>
            <Footer />
        </>
    )
}

export default Contact;
