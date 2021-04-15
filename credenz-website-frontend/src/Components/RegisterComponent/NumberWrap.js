import React from "react";
import Number from "./Number";

const NumberWrap = (props) => {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <div className='form-row'>
          <Number
            index={1}
            id='inputContact1'
            value={props.formData.number1}
            name='number1'
            changeHandler={props.setFormData}></Number>
          <Number
            index={2}
            id='inputContact2'
            value={props.formData.number2}
            name='number2'
            changeHandler={props.setFormData}></Number>
        </div>
      </div>
    );
  else return <></>;
};

export default NumberWrap;
