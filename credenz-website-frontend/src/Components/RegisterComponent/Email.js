import React, {useState} from "react";
// import classes from './Register.css';

const Email = (props) => {

  //const [cols, setcols] = useState("col-md-6")

  let cols = "col-md-6"
/*
  if(props.team==="single")
    cols = "col-md-12"
  */
  return (
    <div className={`form-group ${cols} emails`} >
      <label htmlFor={props.id}>Email {props.index}</label>
      <input
        type='email'
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
        className='form-control'
        id={props.id}
      />
      <span id={props.id} className='errormsg'></span>
    </div>
  );
};

export default Email;
