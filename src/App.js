import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./statics/scss/index.sass";
import Home from "./components/Home";
import ListAuctions from "./components/ListAuctions";
import ListAnnounce from "./components/ListAnnounce";
import MyFavorite from "./components/MyFavorite";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";
import Login from "./components/User/Login";
import ForgotPassword from "./components/User/ForgotPassword";
import SignUp from "./components/User/SignUp";
import Resumption from "./components/Resumption";
import Calender from "./components/Calender";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list-auction" component={ListAuctions} />
        <Route exact path="/list-announce" component={ListAnnounce} />
        <Route exact path="/favorite" component={MyFavorite} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/trade" component={Resumption} />
        <Route exact path="/calender" component={Calender} />
      </Switch>
    </Router>
  );
}

export default App;
