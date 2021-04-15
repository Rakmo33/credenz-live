import React, { useState } from "react";
import Social from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import jwt from "jwt-decode";
import emailjs from "emailjs-com";
import "./button.css";
import Alert from "../Alert/alert";

const Feedback = () => {
  let user = "";
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [variant, setVar] = useState("");
  const [spinner, setSpinner] = useState("");

  if (localStorage.getItem("user")) {
    user = jwt(localStorage.getItem("user"));
  }

  const [name, setName] = useState(
    localStorage.getItem("user")
      ? JSON.stringify(user["name"]).replace(/"/g, "")
      : ""
  );
  const [feedback, setFeedback] = useState("");

  function resetForm() {
    setName("");
    setFeedback("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSpinner("submitSpinner");

    //console.log(name + feedback);

    let templateParams = {
      from_name: name,
      to_name: "Credenz_feedback_reciever",
      message: feedback,
    };

    emailjs
      .send(
        "service_3aso73o", //service id
        "template_uow41nd", //template id
        templateParams,
        "user_OPMTdBG3Qp9A9ExXTPv1p" //user API key
      )
      .then(
        (response) => {
          // alert("Your feedback was sent successfully.");
          setShow(true);
          setMsg("Your feedback was sent successfully.");
          setVar("success");
          resetForm();
          document.querySelector("#message").value = "";
          setSpinner(" ");

          // //console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setShow(true);
          setMsg(e);
          setVar("danger");
          //console.log(err);
          setSpinner(" ");

          // //console.log("FAILED...", err);
        }
      );
  }

  return (
    <>
      <div className='container mt-5 feedbackWrap'>
        {show ? (
          <Alert show={show} setShow={setShow} var={variant}>
            {msg}
          </Alert>
        ) : null}
        <div className='row py-5 mt-4 align-items-center'>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src={require("../../assests/img/feedback.svg")}
              alt=''
              className='img-fluid mb-3 '
            />
            {/* <h1>Feedback</h1> */}
          </div>
          <div className='col-md-7 col-lg-6 ml-auto'>
            <form className='feedback' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={
                    localStorage.getItem("user")
                      ? JSON.stringify(user["name"]).replace(/"/g, "")
                      : "Name"
                  }
                  required></input>
              </div>
              {/*
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  defaultValue={
                    localStorage.getItem("user")
                      ? JSON.stringify(user["email"]).replace(/\"/g, "")
                      : "Email"
                  }
                  required></input>
                </div>*/}
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  className='form-control'
                  id='message'
                  defaultValue=''
                  onChange={(e) => setFeedback(e.target.value)}
                  style={{ resize: "none" }}
                  rows='8'
                  required></textarea>
              </div>
              <div className={spinner} style={{ textAlign: "center" }}>
                <button id='feedbackSubmitBtn' className='kave-btn'>
                  <span className='kave-line'></span>
                  Submit
                </button>
                <span id='spinnerCircle'></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Social />
      <Footer />
    </>
  );
};

export default Feedback;
