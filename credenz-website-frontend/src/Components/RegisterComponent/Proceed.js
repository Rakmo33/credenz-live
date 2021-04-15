import React from "react";

function Proceed(props) {
  if (props.isVisible) {
    //console.log(JSON.stringify(Object.keys(props.formData.events)));

    const EVENTS = Object.keys(props.formData.events);

    let eventList = "";
    let count = 1;
    eventList = EVENTS.map((x) => {
      return (
        <tr>
          <td>{x}</td>
        </tr>
      );
    });

    return (
      <div className='proceedWrap'>
        {/*<table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Registered events</th>
            </tr>
          </thead>
          <tbody>{eventList}</tbody>
    </table>*/}

        {/* <div style={{margin:30}}>
      <img
              src={require("../../assests/img/reg.svg")}
              alt=''
              className='img-fluid mb-3 '
            /> 
      </div> */}

        <div className={props.cls}>
          <button className='btn btn-primary next-btn'>
            Proceed For Payment
            <br />
            <span id='total-amount'>₹{props.total}</span>
          </button>
        </div>
      </div>
    );
  } else return <></>;
}

export default Proceed;
