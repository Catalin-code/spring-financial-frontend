import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Slider slides={SliderData} />
      <InfoSection {...InfoData} /> */}
    </Router>
  );
}

export default App;
