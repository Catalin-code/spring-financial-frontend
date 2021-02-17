import React from "react";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/faq" component={FAQ} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Slider slides={SliderData} />
      <InfoSection {...InfoData} /> */}
    </Router>
  );
}

export default App;
