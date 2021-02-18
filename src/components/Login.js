import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
  padding-left: 20%;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  color: white;
  margin-top: 5%;
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function test() {
  document.location.href = "http://localhost:3000/test";
}

function Login() {
  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <form
            onSubmit={() => {
              test();
            }}
          >
            <h3>Log in</h3>

            <div className="form-group align-items-center">
              <label>Private Identification Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter PID"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </Container>
      </Section>
    </>
  );
}

export default Login;
