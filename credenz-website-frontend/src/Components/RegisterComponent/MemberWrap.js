import React from "react";
import Radio from "./Radio";

const MemberWrap = (props) => {
  let checked = [false, false];

  if (props.isVisible) {
    switch (props.formData.isMember) {
      case "true":
        checked[0] = true;
        break;
      case "false":
        checked[1] = true;
        break;
      default:
        break;
    }
    return (
      <div className={props.cls}>
        <div className='form-row col-flex'>
          <p id='choose-events'>Select Your Category</p>

          <div className='justify-spread'>
            <Radio
              index={1}
              id='Radio5'
              name='isMember'
              value={true}
              changeHandler={props.setFormData}
              label='IEEE Member'
              checked={checked[0]}></Radio>
            <Radio
              index={1}
              id='Radio6'
              name='isMember'
              changeHandler={props.setFormData}
              value={false}
              label='Non IEEE Member'
              checked={checked[1]}></Radio>
          </div>
          <span id='memberErrMsg' className='errormsg'></span>
        </div>
      </div>
    );
  } else return <></>;
};

export default MemberWrap;
