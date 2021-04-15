import React from "react";
// import classes from './Register.css';

const Name = (props) => {
  return (
    <div className='form-group col-md-12'>
      {props.name === "teamName" && (
        <label htmlFor={props.id}>Team Username </label>
      )}
      {props.name !== "teamName" && (
        <label htmlFor={props.id}>Participant {props.index}</label>
      )}
      <input
        type='text'
        className='form-control'
        name={props.name}
        id={props.id}
        onChange={props.changeHandler}
      />
      <span id={props.id} className='errormsg'></span>
    </div>
  );
};

export default Name;
