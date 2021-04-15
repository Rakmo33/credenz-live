import axios from "axios";
import React, { useState, useEffect } from "react";

const RegisteredEvents = (props) => {
  //console.log(props.eveList);

  //   if (props.eveList[0]) //console.log(props.eveList.toObject());
  const [dataLoaded, setDataLoaded] = useState(true);

  //   setTimeout(() => {
  //     // props.eveList.forEach((item) => {
  //     //   //console.log(item);
  //     // });
  //     // //console.log(props.eveList.length);

  //     setDataLoaded(true);
  //   }, 10000);
  // //console.log(props.eveList[15]);

  useEffect(() => {
    // //console.log("LOLOLOO");
    // //console.log(props.eveList);
  });

  const getApproved =(id, token)=>{
      axios({
          method:'post',
          url:(`${process.env.REACT_APP_API_URL}/admin/allregs/`+id),
          headers: { authorization: `Bearer ${token}` },
      }).then(()=>{
        console.log(id)
      }).catch(err=>{
        console.log(id+ err)
      })
  }

  if (props.eveList !== undefined) {
    return dataLoaded ? (
      props.eveList.map((item, index) => {
        if (item.message !== "Registration Not Found") {
          return (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{`${item.username}`}</td>
              <td>{`${item.event_username}`}</td>
              <td>{`${item.transaction_id}`}</td>
              <td>{`${item.price}`}</td>
              <td> 
                  {(item.approved == false) ? ( 
                  <button className='btn btn-primary' onClick={()=>{getApproved(item._id, props.token)}}>Approve</button>
                  ) : <button className='btn btn-success' >Already Approved</button> }
             </td>
            </tr>
          );
        } else return null;
      })
    ) : (
      <tr>
        <td>{`NULLL`}</td>
      </tr>
    );
  } else {
    return <tr>no events listed</tr>;
  }
};

export default RegisteredEvents;
