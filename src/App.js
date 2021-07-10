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
import Messages from "./components/Messages";
import CustomerOrder from "./components/CustomerOrder";
import Reservation from "./components/Reservation";
import InvoiceReceived from "./components/InvoiceReceived";
import InvoiceSend from "./components/InvoiceSend";
import CreditNoteReceive from "./components/CreditNoteReceive";
import CreditNoteSent from "./components/CreditNoteSent";
import Customers from "./components/Customers";
import Provider from "./components/Provider";
import Shop from "./components/Shop";
import AccountParticular from "./components/User/AccountParticular";
import AccountProfessional from "./components/User/AccountProfessional";
import Setting from "./components/Setting";
import SettingShop from "./components/SettingShop";
import Showcase from "./components/settingshopSteps/Showcase";
import Product from "./components/showcaseLanding/product";
import Contact from "./components/showcaseLanding/contact";


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
        <Route exact path="/verify-success" component={SignUp} />
        <Route exact path="/verification-message" component={SignUp} />
        <Route exact path="/trade" component={Resumption} />
        <Route exact path="/calender" component={Calender} />
        <Route exact path="/message" component={Messages} />
        <Route exact path="/order" component={CustomerOrder} />
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/invoicereceive" component={InvoiceReceived} />
        <Route exact path="/invoicesend" component={InvoiceSend} />
        <Route exact path="/creditreceive" component={CreditNoteReceive} />
        <Route exact path="/creditsent" component={CreditNoteSent} />
        <Route exact path="/customer" component={Customers} />
        <Route exact path="/provider" component={Provider} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/account-particular" component={AccountParticular} />
        <Route
          exact
          path="/account-professional"
          component={AccountProfessional}
        />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/settingshop" component={SettingShop} />
        <Route exact path="/showcase" component={Showcase} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
