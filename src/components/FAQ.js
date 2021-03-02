import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import { InfoData3 } from "../data/InfoData";
import React from "react";
import Faq from 'react-faq-component';
import styled from "styled-components";

const data = {
    title: "Frequently asked questions",
    rows: [
      {
        title: "Can I get information about my account by phone?",
        content: "Yes! Account information is available with our Customer Service Representatives during business hours at any of our offices."
      },
      {
        title: "When do I have access to use Internet Banking?",
        content: "With Online Banking, you have access to your account information 24 hours a day, 7 days a week!"
      },
      {
        title: "What is an IBAN?",
        content: "An International Bank Account Number (IBAN) identifies an individual account (country, bank, branch and account number) in an individual transaction. It’s extremely important in the smooth running of international money transfers. It’s up to 34 characters long and will include both numbers and letters"
      },
      {
        title: "How do I close my account?",
        content: "You can close your account at any Spring Financial branch"
      },
      {
        title: "What is the withdrawal limit for my debit card?",
        content: "The daily limit for debit card transactions is $2,000. Contactless payments are included in the daily limit.        "
      },
      {
        title: "I lost my debit card. What should I do?",
        content: "If your card is lost, stolen, used fraudulently or retained by a banking machine, call us immediately. An agent will walk you through the process."
      }
    ]
  }

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem 0rem;
  margin: 0rem 0rem;
  background-color: #000d1a;
  text-align: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 800px;
  color: white;
  h2 {
    text-align: center;
    align-items: center;
  }
`;
const styles = {
    bgColor: '#000d1a',
    titleTextColor: 'white',
    titleTextSize: '48px',
    rowTitleColor: 'white',
    rowTitleTextSize: 'medium',
    rowContentColor: 'grey',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '15px',
    arrowColor: "white",
    transitionDuration: "1s",
    timingFunc: "ease"
};
function FAQ(){
    return (
        <>
          <Navbar />
          <Section>
            <Container>
                <Faq
                  data={data}
                  styles={styles}
                />
              </Container>
          </Section>
          <Footer />
        </>
    );
}
export default FAQ;