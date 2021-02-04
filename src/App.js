import React from "react";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Slider slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
