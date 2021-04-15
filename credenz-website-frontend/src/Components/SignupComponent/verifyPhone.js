import React, { useState } from "react";
import "./Signup.css";
// import Footer from "../Footer/footer";
import Social from "../sideEventButton/sideEvent";
import Validate from "./ValidateInfo";
import axios from "axios";

function VerifyPhone() {
  const [phone, setPhone] = useState("");
  const [code, setcode] = useState("");
  const [OTP, setOTP] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (!values.phoneno) {
      errors.phone =
        "*Phone no required(with country code for eg 91-0123456789).";
    } else if (!/^[0-9]{12}$/.test(values.phoneno)) {
      errors.phone = "*Please enter valid phone number.";
    }

    if (!errors.boolean) {
      if (!OTP) {
        var IN = "91";
        var ph = IN.concat(phone);
        //console.log(ph);
        setPhone(ph);
        //console.log(phone);

        try {
          axios
            .get("http://localhost:5000/getcode", {
              params: {
                phonenumber: ph,
                channel: "sms",
              },
            })
            .then(function (data) {
              setOTP(true);
              //console.log(data);
            })
            .catch((err) => 
            console.log(err));
        } catch (e) {
          // alert("Axios error!" + e);
        }
      } else {
        //console.log("else");
        //console.log(phone);

        //console.log(ph);
        //console.log(code);
        try {
          axios
            .get("http://localhost:5000/verifycode", {
              params: {
                phonenumber: phone,
                code: code,
              },
            })
            .then(function (data) {
              // alert(JSON.stringify(data));
            })
            .catch((err) => console.log(JSON.stringify(err)));
        } catch (e) {
          // alert("Axios error!" + e);
        }
      }
    }

    // e.preventDefualt()
  };

  const values = {
    phoneno: phone,
  };
  /*
  const verifyPhone = (e) => {
    setPhone(e.target.value)

    const e = this.state.code+this.state.pno;
    await axios.get("http://localhost:8000/verify/getcode", {
        params: {
            phonenumber: e,
            channel: 'sms'
        }
    })
    .then(data => //console.log(data))
    .catch(err => //console.log(err));

  }
*/ //console.log(
  //   values
  // );

  const errors = Validate(values);

  //e.preventDefualt()

  return (
    <>
      <div className='container mt-5'>
        <div className='row py-5 mt-4 align-items-center'>
          <div className='col-md-5 pr-lg-5 mb-5 mb-md-0'>
            <img
              src='https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg'
              alt=''
              className='img-fluid mb-3 d-none d-md-block'
            />
            <h1>Verify your account</h1>
          </div>

          <div className='col-md-7 col-lg-6 ml-auto'>
            <form onSubmit={submitForm}>
              <div className='row'>
                <div className='input-group col-lg-12 mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text bg-white px-4 border-md border-right-0'>
                      <i className='fa fa-phone-square text-muted'></i>
                    </span>
                  </div>
                  <input
                    id='phoneNumber'
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    className='form-control bg-white border-md border-left-0 pl-3'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  {errors && (
                    <small id='phoneErr' className='form-text text-danger'>
                      {errors.phone}
                    </small>
                  )}
                </div>

                {OTP && (
                  <div className='input-group col-lg-12 mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text bg-white px-4 border-md border-right-0'>
                        <i className='fa fa-phone-square text-muted'></i>
                      </span>
                    </div>
                    <input
                      id='phoneNumber'
                      type='text'
                      name='phone'
                      placeholder='Enter Verification Code'
                      className='form-control bg-white border-md border-left-0 pl-3'
                      onChange={(e) => setcode(e.target.value)}
                      value={code}
                    />
                  </div>
                )}

                <div className='form-group col-lg-12 mx-auto mb-0'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-block py-2'>
                    {OTP ? (
                      <span className='font-weight-bold'>Verify phone no</span>
                    ) : (
                      <span className='font-weight-bold'>
                        Send OTP to verify
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Social />
    </>
  );
}

export default VerifyPhone;
