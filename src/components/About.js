import React from "react";
import Navbar from "./Navbar";
import InfoSection from "./InfoSection";
import { InfoData2 } from "../data/InfoData";

function About() {
  return (
    <>
      <Navbar />
      <InfoSection {...InfoData2} />
    </>
  );
}

export default About;
