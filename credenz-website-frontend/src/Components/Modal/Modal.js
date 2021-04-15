import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Modal.css";
import axios from "axios";
// import jwt from "jwt-decode";

function ModalTitle({ type, event }) {
  if (type === "login")
    return (
      <div className='modal-title'>
        <div>Login</div>
      </div>
    );
  else if (type === "clash" || type === "rc")
    return (
      <div className='clashRC-title'>
        <div>Choose Your Category</div>
      </div>
    );
  else {
    switch (event) {
      case "clash":
        return <div>Clash</div>;

      case "rc":
        return <div>Reverse Coding</div>;

      case "enigma":
        return <div>Enigma</div>;
      case "xodia":
        return <div>Xodia</div>;

      case "webweaver":
        return <div>Web weaver</div>;

      case "bplan":
        return <div>B-Plan</div>;

      case "quiz":
        return <div>Quiz</div>;

      default:
        return <div>Invalid request</div>;
    }
  }
}

function ModalBody({ handleClose, type, event, event_info }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const [spinner, setSpinner] = useState("form-group");
  const [error, setError] = useState("error");

  function refreshPage() {
    window.location.reload(false);
  }

  if (type === "login") {
    const login = (e) => {
      //console.log("Login Form Submitted!");
      setSpinner("form-group loginBtnWrap");

      e.preventDefault();

      try {
        axios
          .post(`${process.env.REACT_APP_API_URL}/login`, {
            username: username,
            password: password,
          })
          .then(function (response) {
            // //console.log(response.data);
            //const msg = response.data["accessToken"]
            if (response.data["accessToken"]) {
              // alert("Logged in successfully!");
              localStorage.setItem("user", JSON.stringify(response.data));

              handleClose();
              localStorage.removeItem("Cart");
              localStorage.removeItem("Register");
              refreshPage();
              // const user = jwt(response.data["accessToken"]);
              // //console.log("JWT decode : " + JSON.stringify(user));
              localStorage.removeItem("Cart");
              localStorage.removeItem("Register");
              setLogged(true);
            } else {
              // alert("Invalid login credentials!");
              setError("error invalid");
              setSpinner("form-group ");
              localStorage.removeItem("Cart");
              localStorage.removeItem("Register");
              localStorage.removeItem("user");
              setLogged(false);
            }
          });
      } catch (e) {
        // alert("Axios error!" + e);
      }
    };

    return (
      <div id='myModal'>
        <div className='modal-login'>
          <form onSubmit={login}>
            {/* <form> */}
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-envelope'></i>
                </span>
                <input
                  type='text'
                  className='form-control'
                  name='username'
                  placeholder='Username'
                  required='required'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-lock'></i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  required='required'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <h6 className={error}>Invalid Credentials!</h6>
            {/* <div className='form-group'> */}
            <div className={spinner}>
              <button
                id='loginBtn'
                type='submit'
                className='btn loginbtnn  btn-block btn-lg'>
                Login
              </button>
              <span></span>
            </div>

            <p className='hint-text'>
              Don't have an account?{" "}
              <Link id='create' to='/signup' onClick={handleClose}>
                Create one
              </Link>
            </p>

            {/* <p className='hint-text'>
              <Link id='create' to='/edit' onClick={handleClose}>
                Forgot Password?
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    );
  } else if (type === "clash" || type === "rc") {
    return (
      <div id='myModal'>
        <div className='modal-login clashRC'>
          <div className='category'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={
                type === "clash"
                  ? "//clashjr.credenz.in/"
                  : type === "rc"
                  ? "//rcjunior.credenz.in/"
                  : "//credenz.in"
              }
              className='regNowBtn playNow'>
              {/* <i class='fa fa-gamepad'></i> */}
              Junior
            </a>
            <p>FE-SE</p>
          </div>
          <div className='category'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={
                type === "clash"
                  ? "//clashsr.credenz.in/"
                  : type === "rc"
                  ? "//rcsenior.credenz.in/"
                  : "//credenz.in"
              }
              className='regNowBtn playNow'>
              {/* <i class='fa fa-gamepad'></i> */}
              Senior
            </a>
            <p>TE-BE</p>
          </div>
        </div>
      </div>
    );
  } else {
    function EventsCode({ des, time, price }) {
      return (
        <div>
          <div className='card shadow-sm  mt-3'>
            <div className='card-body'>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade animated zoomIn show active'
                  id='tabs-clash-1'
                  role='tabpanel'
                  aria-labelledby='tabs-clash-1-tab'>
                  <p className='text-center text-default font-weight-normal '>
                    {des}
                    <br />
                    {time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5 className='text-default font-weight-normal '>
            Registration Fees:
          </h5>
          <div className='d-flex align-items-start '>
            <div className=''>
              <div className='badge badge-pill bg-gradient-primary mr-3 '></div>
            </div>
            <div>
              <p className=' text-default font-weight-normal '>
                <strong>{price}</strong> for Non-IEEE members
              </p>
            </div>
          </div>
          <div className='d-flex align-items-start  '>
            <div>
              <div className='badge badge-pill bg-gradient-primary mr-3'></div>
            </div>
            <div>
              <p className=' text-default font-weight-normal '>
                <strong>{price}</strong> for IEEE members
              </p>
            </div>
          </div>
        </div>
      );
    }

    switch (event) {
      case "clash":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[0]["event_des"])}
              time={JSON.stringify(event_info[0]["event_time"])}
              price={JSON.stringify(event_info[0]["event_price"])}
            />
          </>
        );

      case "enigma":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[0]["event_des"])}
              time={JSON.stringify(event_info[0]["event_time"])}
              price={JSON.stringify(event_info[0]["event_price"])}
            />
          </>
        );

      case "rc":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[1]["event_des"])}
              time={JSON.stringify(event_info[1]["event_time"])}
              price={JSON.stringify(event_info[1]["event_price"])}
            />
          </>
        );
      case "xodia":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[0]["event_des"])}
              time={JSON.stringify(event_info[0]["event_time"])}
              price={JSON.stringify(event_info[0]["event_price"])}
            />
          </>
        );

      case "webweaver":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[1]["event_des"])}
              time={JSON.stringify(event_info[1]["event_time"])}
              price={JSON.stringify(event_info[1]["event_price"])}
            />
          </>
        );

      case "bplan":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[2]["event_des"])}
              time={JSON.stringify(event_info[2]["event_time"])}
              price={JSON.stringify(event_info[2]["event_price"])}
            />
          </>
        );

      case "quiz":
        return (
          <>
            <EventsCode
              des={JSON.stringify(event_info[2]["event_des"])}
              time={JSON.stringify(event_info[2]["event_time"])}
              price={JSON.stringify(event_info[2]["event_price"])}
            />
          </>
        );

      default:
        return <div>Invalid request</div>;
    }
  }
}

function Modal1({ show, handleClose, type, event, event_info }) {
  return (
    <>
      <Modal
        dialogClassName='modal-90w'
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <ModalTitle type={type} event={event} />{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody
            handleClose={handleClose}
            type={type}
            event={event}
            event_info={event_info}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;

/*
               const response =  await axios.get('http://credenzwebsite.herokuapp.com/allevents').then(function (response) {
                    //alert(JSON.stringify(response.data[0]["event_name"]));
                    setEventDesc(response.data);
                })

*/
