import React, { Component, useState, useEffect } from "react";
import { Ippopay } from "react-ippopay";
import jwt from "jwt-decode";
import axios from "axios";

const Ipay = (props) => {
  const [isIppopayOpen, setIsIppoPayOpen] = useState(false);
  const [order_id, setOrder_id] = useState("");
  const [public_key, setPublic_key] = useState("pk_live_LxGuVR5mwBuy");
  // state = {
  //   ippopayOpen: false,
  //   order_id: "",
  //   public_key: "pk_live_LxGuVR5mwBuy",
  // };

  const ippopayOpen = () => {
    // this.setState({ ippopayOpen: true });
    setIsIppoPayOpen(true);
    // props.Register();

    // props.Register();
    // this.props.Register();
  };
  const ippopayHandler = (e) => {
    if (e.data.status === "success") {
      // console.log("success");
      // alert("Registered Successfully!");
      props.Register();

      axios
        .post(`${process.env.REACT_APP_API_URL}/${props.username}/sendmail`)
        .then(function (response) {
          console.log(response);
        });
    }
    if (e.data.status === "failure") {
      console.log("failure");
    }
  };

  useEffect(() => {
    window.addEventListener("message", ippopayHandler);
  }, []);

  useEffect(() => {
    let user = "";

    if (localStorage.getItem("user")) {
      user = jwt(localStorage.getItem("user"));
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("user")
          ? JSON.stringify(user["username"]).replace(/"/g, "")
          : "",
        amount: props.sum,
        email: localStorage.getItem("user")
          ? JSON.stringify(user["email"]).replace(/"/g, "")
          : "",
        phoneno: localStorage.getItem("user")
          ? JSON.stringify(user["phoneno"]).replace(/"/g, "")
          : "",
      }),
    };
    fetch(`${process.env.REACT_APP_API_URL}/payment`, requestOptions)
      .then((response) => {
        //alert(JSON.stringify(response))
        return response.json();
      })
      .then((data) => {
        //alert(JSON.stringify(data.data.order.order_id))
        //alert("orderid" + data)

        setOrder_id(data.data.order.order_id);

        // this.setState({ order_id: data.data.order.order_id });
      });
  }, []);

  // render() {
  if (order_id !== "" || order_id !== undefined) {
    // console.log(order_id);
    return (
      <div>
        <span className='btn btn-primary' onClick={(e) => ippopayOpen(e)}>
          Proceed to pay Rs {props.sum}
        </span>
        <Ippopay
          ippopayOpen={isIppopayOpen}
          ippopayClose={true}
          order_id={order_id}
          public_key={public_key}
        />
      </div>
    );
  } else {
    return <div>Payment request being processed</div>;
  }
  // }
};

export default Ipay;
