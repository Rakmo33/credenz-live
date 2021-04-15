//"start": "npm run build && (cd server && npm start)",
import React, { Component, useState, useEffect } from "react";
import Home from "./HomeComponent/HomeComponent";
import Events from "./EventsComponent/EventsComponent";
import Register from "./RegisterComponent/RegisterComponent";
import Contact from "./ContactComponent/ContactComponent";
import Signup from "./SignupComponent/Signup";
import Edit from "./SignupComponent/EditProfile";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import About from "../Components/HomeComponent/Aboutus/Aboutus";
import SideEvents from "./SideEvents/sideEvents";
import LeaderBoard from "./SideEvents/leaderboard";
import Team from "../Components/Team/Team";
import Profile from "../Components/Profilepage/Profilepage";
import Admin from "../Components/AdminSection/adminAuth";
import VerifyPhone from "../Components/SignupComponent/verifyPhone";
import AboutUs from "../Components/HomeComponent/Aboutus/Aboutus";
// import Footer from '../Components/Footer/footer';
import NewReg from "../Components/RegisterComponent/NewReg";
import Cart from "../Components/RegisterComponent/Cart";
import Refund from "../Components/Footer/refund";
import Privacy from "../Components/Footer/privacy";
import Terms from "../Components/Footer/terms";
//import Ipay from "../Components/Ipay/Ipay";
import "./maincomponent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';

function Main() {
  var cartArray = localStorage.getItem("Cart")
    ? localStorage.getItem("Cart").split(",")
    : [];

  const [cartNum, setcartNum] = useState(cartArray.length);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const HomePage = () => {
    return <Home />;
  };
  const EventsPage = () => {
    return <Events setcartNum={setcartNum} cartNum={cartNum} />;
  };
  const RegisterPage = () => {
    return <Register />;
  };

  const ContactPage = () => {
    return <Contact />;
  };

  const AboutPage = () => {
    return <About />;
  };

  const LeaderBoardPage = () => {
    return null;
    // return <LeaderBoard />;
  };

  const SignUpPage = () => {
    return <Signup />;
  };

  const EditProfilePage = () => {
    return <Home />;
  };

  const TeamPage = () => {
    return <Team />;
  };

  const ProfilePage = () => {
    return <Profile />;
  };

  const AdminPage = () => {
    return <Admin />;
  };

  const VerifyPhonePage = () => {
    return <VerifyPhone />;
  };

  const AboutUsPage = () => {
    return <AboutUs />;
  };

  const CartPage = () => {
    if (localStorage.getItem("user")) return <Cart />;
    else {
      window.location.href = "/home";
      return null;
    }
  };

  const NewRegPage = () => {
    return <NewReg />;
  };

  const IpayPage = () => {
    return <NewReg />;
  };

  const RefundPage = () => {
    return <Refund />;
  };

  const PrivacyPage = () => {
    return <Privacy />;
  };

  const TermsPage = () => {
    return <Terms />;
  };

  //const num = cartNum;

  return (
    <div>
      {/* <NavBar cartNum={cartNum} /> */}
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/register/:event' component={RegisterPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/sideEvents' component={SideEvents} />
        {/* <Route path='/leaderboard' component={HomePage} /> */}
        <Route path='/signup' component={SignUpPage} />
        {/* <Route path='/edit' component={EditProfilePage} /> */}
        <Route path='/team' component={TeamPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/aboutus' component={AboutUsPage} />
        <Route path='/verifyphone' component={VerifyPhonePage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/newreg/:event' component={NewRegPage} />
        <Route path='/refund' component={RefundPage} />
        <Route path='/privacy' component={PrivacyPage} />
        <Route path='/terms' component={TermsPage} />
        <Route path='/ipay' component={IpayPage} />
        <Redirect to='/home' />
      </Switch>
      {/* <Footer /> */}
      {/* <NavBar /> */}
    </div>
  );
}

export default Main;
