import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import BranchOffices from "./components/BranchOffices";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/branch-offices" component={BranchOffices} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Slider slides={SliderData} />
      <InfoSection {...InfoData} /> */}
    </Router>
  );
}

export default App;
