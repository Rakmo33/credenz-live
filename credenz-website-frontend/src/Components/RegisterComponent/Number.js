import React from "react";
// import classes from './Register.css';

const Number = (props) => {
  return (
    <div className='form-group col-md-6'>
      <label htmlFor={props.id}>Contact Number {props.index}</label>
      <input
        type='tel'
        minLength='10'
        maxLength='10'
        className='form-control'
        name={props.name}
        defaultValue={props.value}
        onChange={props.changeHandler}
        id={props.id}
      />
      <span id={props.id} className='errormsg'></span>
    </div>
  );
};

export default Number;
