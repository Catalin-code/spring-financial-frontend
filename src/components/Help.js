import React from 'react';
import emailjs from "emailjs-com";
import styled from "styled-components";
import Footer from './Footer';
import Navbar from './Navbar';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  color: white;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Help() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_oyg694x', e.target, 'user_QqOFi8j5ZwvQyQwKNYDzX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }
    return (
      <>
        <Navbar />
        <Section>
            <Container>
              <form onSubmit={sendEmail}>
                <input type="text" className="form-control" placeholder="Name" name="name"/>
                <input type="email" className="form-control" placeholder="E-mail Address" name="email"/>
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                <textarea  className="form-control" id="" name="message" cols="30" rows="10" placeholder="Your message"></textarea>
                <input type="submit" className="btn btn-info" value="Send message"></input>
              </form>
              
            </Container>
        </Section>
        <Footer />
      </>
    )
}
