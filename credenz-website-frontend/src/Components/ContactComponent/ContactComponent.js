import React, { useState, useEffect } from "react";
import ContactUs from "./contact";
import Team from "./team";
import "./contact.css";
import Feedback from "./feedback";
import Nav from "../Navbar/Navbar";

const Contact = () => {
  const [select, setSelect] = useState("Contact");

  const handleSelect = (select) => {
    setSelect(select);
  };

  useEffect (()=>{
    document.title=`CREDENZ LIVE | Contact Us`;
  },[]);

  return (
    <div className='container-fluid cont contactUsWrap'>
      <Nav />
      <div className='row head'>
        <div className='col-xl-10 col-md-10 col-sm-12  '>
          <div
            className='row nav'
            style={{ height: "100%", marginTop: "50px" }}>
            <div
              className={
                select === "Contact"
                  ? "col-xl-6 col-md-6  col-sm-2 tab select"
                  : "col-xl-6 tab  col-md-6  col-sm-2 "
              }>
              <h3 onClick={() => handleSelect("Contact")}>Contact Us</h3>
            </div>
            <div
              className={
                select === "Feedback"
                  ? "col-xl-4 col-md-4  col-sm-2 tab select"
                  : "col-xl-4 tab  col-md-4  col-sm-2"
              }>
              <h3 onClick={() => handleSelect("Feedback")}>Feedback</h3>
            </div>
          </div>
        </div>
      </div>
      {select === "Contact" ? (
        <ContactUs />
      ) : select === "Team" ? (
        <Team />
      ) : (
        <Feedback />
      )}
    </div>
  );
};

export default Contact;
