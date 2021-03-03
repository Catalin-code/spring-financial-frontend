import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import UserDetails from "./components/UserDetails";
import FAQ from "./components/FAQ";
import AccountDetails from "./components/AccountDetails"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/faq" component={FAQ} />
        <Route path="/about" component={About} />
        <Route path="/customer/:pid" component={UserDetails} />
        <Route path="/account/:id" component={AccountDetails} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Slider slides={SliderData} />
      <InfoSection {...InfoData} /> */}
    </Router>
  );
}

export default App;
