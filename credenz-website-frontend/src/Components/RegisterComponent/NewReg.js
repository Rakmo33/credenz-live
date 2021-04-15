import React from "react";
import { useForm } from "react-hooks-helper";
import "./Register.css";
import SideEventsButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
//import axios from "axios";
import { useParams } from "react-router-dom";
// form components
import NameWrap from "./NameWrap";
//import LoginFirst from "../LoginFirst/LoginFirst";
import Nav from "../Navbar/Navbar";
import jwt_decode from "jwt-decode";

function NewReg() {
  const params = useParams();
  //   const user = localStorage.getItem("user") ? localStorage.getItem("user") : "";


  const token = localStorage.getItem("user");
  //const accessToken = JSON.parse(token).accessToken;
  var decoded = jwt_decode(token);

  let defaultFormData = {};
  //if(localStorage.getItem("user")) {
  defaultFormData = {
    team: "team",
    event: params.event,
    teamName: "",
    username: decoded.username,
    name1: "", //JSON.stringify(localStorage.getItem("user")),//localStorage.getItem("user")!==undefined ? JSON.stringify(user["username"]).replace(/"/g, "") : "",
    name2: "",
    name3: "",
  };
  // }
  const [formData, setFormData] = useForm(defaultFormData);

  //  if(localStorage.getItem("user")){

  return (
    <div>
      <Nav />
      <SideEventsButton />
      <div className='regPage'>
        <div className='regPageVector'>
          <h1 className='reg-head'>Choose a team, or go Solo!</h1>
          <img src='/img/register.svg' alt='registration form' />
        </div>
        <div  className='container '>
          <form className='col-md-9 m-auto contwidth'>
            <NameWrap
              isVisible={true}
              formData={formData}
              setFormData={setFormData}
              ></NameWrap>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
  /*            } else {
            return (
                <div>
                <SideEventsButton />
        
                <LoginFirst></LoginFirst>
                <Footer />
                </div>
            );
            }*/
}

export default NewReg;
