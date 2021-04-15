import React from "react";

const Radio = (props) => {
  return (
    <div className='custom-control custom-radio custom-control-inline'>
      <input
        type='radio'
        id={props.id}
        name={props.name}
        value={props.value}
        className='custom-control-input '
        onChange={props.changeHandler}
        checked={props.checked}
      />

      <label className='custom-control-label active' htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
