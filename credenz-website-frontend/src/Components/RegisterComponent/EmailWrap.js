import React from "react";
import Email from "./Email";
import Number from "./Number";

const EmailWrap = (props) => {
  if (props.isVisible) {

    if(props.formData.team==="single") {
      
      return(
        <div className={props.cls}>
        <div className='form-row'>
          <Email
            index={""}
            team={props.formData.team}
            id='inputEmail1'
            name='email1'
            value={props.formData.email1}
            changeHandler={props.setFormData}></Email>
            <Number
            index={""}
            id='inputContact1'
            value={props.formData.number1}
            name='number1'
            changeHandler={props.setFormData}></Number>
        </div>
      </div>
      );

    }else {
      return (
        <div className={props.cls}>
          <div className='form-row'>
            <Email
              index={1}
              id='inputEmail1'
              name='email1'
              value={props.formData.email1}
              changeHandler={props.setFormData}></Email>
            <Email
              index={2}
              id='inputEmail2'
              name='email2'
              value={props.formData.email2}
              changeHandler={props.setFormData}></Email>
          </div>
        </div>
      );
    }

  }
  else return <></>;
};

export default EmailWrap;
