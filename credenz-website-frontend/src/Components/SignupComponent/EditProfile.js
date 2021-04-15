import React, { useState, useEffect } from "react";
import "./Signup.css";
import Footer from "../Footer/footer";
import Social from "../sideEventButton/sideEvent";
import Validate from "./ValidateInfo";
import axios from "axios";
import Nav from '../Navbar/Navbar';
import Modal1 from "../Modal/Modal";

function Edit() {

  useEffect (()=>{
    document.title=`CREDENZ LIVE | Forgot Password`;
  },[]);

  let login = "login";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitForm = (e) => {
    e.preventDefault();
    // //console.log(
    //   "Current state is : " +
    //     JSON.stringify({ email, phone, college, password })
    // );

    if (!errors.boolean) {
      try {
        axios
          .post(`${process.env.REACT_APP_API_URL}/signup`, {
            username: username,
            name: name,
            password: password,
            email: email,
            phoneno: phone,
            clgname: college,
          })
          .then(function (response) {
            alert("Form successfully submitted.");
            // //console.log(response);
            // //console.log(response.data);
            const msg = response.data["accessToken"];
            localStorage.setItem("user", JSON.stringify(response.data));
            // //console.log(msg);
          });
      } catch (e) {
        // alert("Axios error!" + e);
      }

      setName("");
      setUsername("");
      setPhone("");
      setEmail("");
      setCollege("");
      setPassword("");
      setPasswordCheck("");
    }

    // e.preventDefualt()
  };

  const values = {
    username: username,
    name: name,
    password: password,
    email: email,
    phoneno: phone,
    clgname: college,
    passwordCheck: passwordCheck,
  };

  // //console.log(values);

  const errors = Validate(values);

  // //console.log(
  //   "Errors: " + errors.name + errors.username + errors.email + errors.phone
  // );

  //e.preventDefualt()

  return (
    <div style={{background:'black'}} >
      <Nav/>
      <Modal1 show={show} handleClose={handleClose} type={login} />
      <Social />
      {/* <div className="footer heightFooter"> */}
      <div className='container forgotPasswordWrap mt-5'>
        <div className='row py-5 mt-4 align-items-center'>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src={require("../../assests/img/edit.svg")}
              alt=''
              className='img-fluid mb-3 d-none d-md-block'
            />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Reset your password
            </h2>
          </div>

          <div className='col-md-7 col-lg-6 ml-auto'>
            <form onSubmit={submitForm}>
              <div className='row'>
                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-user text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='Name'
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  {errors && (
                    <small id='nameErr' className='form-text text-danger'>
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-user text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                  {errors && (
                    <small
                      id='nameErr'
                      className='form-text inline text-danger'>
                      {errors.username}
                    </small>
                  )}
                </div>

                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-envelope text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    className='form-control bg-white border-left-0 border-md'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errors && (
                    <small id='nameErr' className='form-text text-danger'>
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className='form-group col-lg-12 mx-auto mb-0'>
                  <button type='submit' className='btn stylebtn btn-block py-2'>
                    <span className='font-weight-bold'>
                      Create your account
                    </span>
                  </button>
                </div>

                <div className='text-center w-100 mt-3'>
                  <p className='text-muted font-weight-bold'>
                    Already Registered?{" "}
                    <span
                      className='text-primary ml-2'
                      style={{ cursor: "pointer" }}
                      onClick={handleShow}>
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Edit;
