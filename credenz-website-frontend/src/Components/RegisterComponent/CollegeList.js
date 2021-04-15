import React from "react";

function CollegeList(props) {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <div className='form-row'>
          <label htmlFor='inputState'>College Name</label>
          <select
            id='inputState'
            className='form-control custom-select'
            name='college'
            value={props.formData.college}
            onChange={props.setFormData}>
            <option>Choose...</option>
            <option value='PICT'>PICT</option>
            <option value='COEP'>COEP</option>
            <option value='MCOE'>MCOE</option>
            <option value='VIT'>VIT</option>
          </select>
          <span id='clgErrMsg' className='errormsg'></span>
        </div>
      </div>
    );
  else return <></>;
}

export default CollegeList;
