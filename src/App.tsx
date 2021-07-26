import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './statics/scss/index.sass';
import Home from '././components/pages/Home';
import ListAuctions from './components/pages/Listing/ListAuctions';
import ListAnnounce from './components/pages/Listing/ListAnnounce';
import MyFavorite from './components/pages/User/MyFavorite';
import Dashboard from './components/pages/Dashboard';
import Activity from './components/pages/Activity';
import Login from './components/pages/User/Login';
import ForgotPassword from './components/pages/User/ForgotPassword';
import SignUp from './components/pages/User/SignUp';
import Resumption from './components/Resumption';
import Calender from './components/Calender';
import Messages from './components/common/global/CommonComponents/Navs/subnavs/Messages';
import CustomerOrder from './components/pages/Customers/CustomerOrder';
import Reservation from './components/Reservation';
import InvoiceReceived from './components/pages/Invoice/InvoiceReceived';
import InvoiceSend from './components/pages/Invoice/InvoiceSend';
import CreditNoteReceive from '././components/pages/CreditNote/CreditNoteReceive';
import CreditNoteSent from '././components/pages/CreditNote/CreditNoteSent';
import Customers from './components/pages/Customers';
import Provider from './components/Provider';
import Shop from './components/pages/shop/Shop';
import AccountParticular from './components/pages/User/AccountParticular';
import AccountProfessional from './components/pages/User/AccountProfessional';
import Setting from './components/pages/User/Setting';
import SettingShop from './components/pages/shop/SettingShop';
import Showcase from './components/pages/settingshopSteps/Showcase';
import Product from './components/pages/showcaseLanding/product';
import Contact from './components/pages/showcaseLanding/contact';
import About from './components/pages/showcaseLanding/about';
import Shopreview from './components/pages/showcaseLanding/shopreview';
import Car from './components/pages/NewAdds/Car/Car';
import Bike from './components/pages/NewAdds/Bike/Bike';
import Bicycle from './components/pages/NewAdds/Bicycle/Bicycle';
import OfferDetail from './components/pages/OfferDetail.tsx';
import AdvanceSearch from './components/AdvanceSearch';




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
        <Route exact path="/about" component={About} />
        <Route exact path="/review" component={Shopreview} />
        <Route exact path="/caradd" component={Car} />
        <Route exact path="/motoradd" component={Bike} />
        <Route exact path="/bicycleadd" component={Bicycle} />
        <Route exact path="/offerdetail" component={OfferDetail} />
        <Route exact path="/advancesearch" component={AdvanceSearch} />
      </Switch>
    </Router>
  );
}

export default App;
