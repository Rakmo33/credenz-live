import React, { useState, useEffect } from "react";
import Name from "./Name";
import Radio from "./Radio";
import axios from "axios";
import Alert from "../Alert/alert";
// import jwt_decode from "jwt-decode";
// import jwt from "jwt-decode";
import { Link } from "react-router-dom";

const NameWrap = (props) => {
  // //console.log(props.formData);

  let accessToken = "";
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertColor, setAlertColor] = useState("");
  // if (localStorage.getItem("user")) {
  // const token = localStorage.getItem("user");
  // const accessToken = JSON.parse(token).accessToken;
  // }

  let checked = [false, false];
  let teamAllowed = true;
  var regArray = localStorage.getItem("Register")
    ? JSON.parse(localStorage.getItem("Register"))
    : [];
  var cartArray = localStorage.getItem("Cart")
    ? localStorage.getItem("Cart").split(",")
    : [];
  // let user = "";

  // if (localStorage.getItem("user")) {
  //   user = jwt(localStorage.getItem("user"));
  // }

  function storeReg() {
    if (!cartArray.includes(props.formData.event)) {
      if (props.formData.teamName === "") {
        setAlertMsg("Enter valid team name!");
        setAlertColor("danger");
        setShowAlert(true);

        return;
      }
      // let user = "";
      // if (localStorage.getItem("user")) {
      //   user = jwt(localStorage.getItem("user"));
      // }

      let tempArray = [...cartArray];
      tempArray.push(props.formData.event);
      ////console.log("temp" + cartArray)
      //setCart(tempArray);
      localStorage.setItem("Cart", tempArray);

      //console.log("Store reg");

      let tempRegArray = [...regArray];
      //console.log(props.formData);
      tempRegArray.push(props.formData);
      //console.log(tempRegArray);
      localStorage.setItem("Register", JSON.stringify(tempRegArray));
      // alert("Event team saved.");
      setAlertMsg("Event added to cart!");
      setAlertColor("success");

      setShowAlert(true);

      setTimeout(() => {
        window.location.href = "/events";
      }, 500);
    } else {
      setAlertMsg("Event already present in the cart!");
      setAlertColor("danger");
      setShowAlert(true);
    }
  }

  const [users, setUsers] = useState("");
  let userList = "";

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/allusers`,
      headers: { authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      ////console.log("axios" + response.data)
      setUsers(response.data);
      //alert(JSON.stringify(response.data))
    });
  }, []);

  if (users) {
    userList = users.map((x) => {
      return <option>{x.username}</option>;
    });
  }

  if (props.formData.team === "single") {
    return (
      <>
        <div className='form-row col-flex'>
          <div className='justify-spread'>
            {teamAllowed && (
              <Radio
                index={1}
                id='Radio1'
                name='team'
                value='single'
                changeHandler={props.setFormData}
                label='Single participation'
                checked={checked[0]}></Radio>
            )}
            {teamAllowed && (
              <Radio
                index={2}
                id='Radio2'
                name='team'
                value='team'
                changeHandler={props.setFormData}
                label='Team participation'
                checked={checked[1]}></Radio>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Name
              index={""}
              id='name1'
              value={props.formData.name1}
              changeHandler={props.setFormData}
              name='name1'></Name>
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => storeReg()}
                type='button'
                className='btn btn-outline-info'>
                Save
              </button>
              <br></br>
              <Link to='/events'>
                <button type='button' className='btn btn-outline-info'>
                  Back to events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else if (teamAllowed && props.formData.team === "team") {
    return (
      <form className={props.cls}>
        {showAlert ? (
          <Alert show={showAlert} setShow={setShowAlert} var={alertColor}>
            {alertMsg}
          </Alert>
        ) : null}
        <div className='form-row col-flex'>
          <p id='choose-events'>Enter Names of your team members</p>
          <div>
            <Name
              index={""}
              id='teamName'
              team={props.formData.team}
              value={props.formData.teamName}
              changeHandler={props.setFormData}
              name='teamName'></Name>

            <Name
              index={"2"}
              id='Name1'
              team={props.formData.team}
              value={props.formData.name1}
              changeHandler={props.setFormData}
              name='name1'></Name>

            <Name
              index={"3"}
              id='Name1'
              team={props.formData.team}
              value={props.formData.name2}
              changeHandler={props.setFormData}
              name='name1'></Name>

            <Name
              index={"4"}
              id='Name1'
              team={props.formData.team}
              value={props.formData.name3}
              changeHandler={props.setFormData}
              name='name1'></Name>

            <div style={{ textAlign: "center", marginTop: 10 }}>
              <button
                style={{ marginRight: 10 }}
                onClick={() => storeReg()}
                type='button'
                className='btn btn-outline-info'>
                Save
              </button>
              <Link to='/events'>
                <button type='button' className='btn btn-outline-info'>
                  Back to events
                </button>
              </Link>
            </div>
          </div>
          {/*   <Name
                index={"1*"}
                id='Name1'
                team={props.formData.team}
                value={props.formData.name1}
                changeHandler={props.setFormData}
                name='name1'></Name>
               <Name
                index={2}
                id='Name2'
                team={props.formData.team}
                value={props.formData.name2}
                changeHandler={props.setFormData}
                name='name2'></Name>
               <Name
                index={3}
                id='Name3'
                value={props.formData.name3}
                team={props.formData.team}
                changeHandler={props.setFormData}
            name='name3'></Name>*/}
        </div>
      </form>
    );
  } else return <></>;
};

export default NameWrap;
