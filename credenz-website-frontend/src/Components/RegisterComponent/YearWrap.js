import React from "react";
import Radio from "./Radio";

const YearWrap = (props) => {
  ////console.log(props.formData);
  let checked = [false, false, false, false];

  if (props.isVisible) {
    switch (props.formData.year) {
      case "FE":
        checked[0] = true;
        break;
      case "SE":
        checked[1] = true;
        break;
      case "TE":
        checked[2] = true;
        break;
      case "BE":
        checked[3] = true;
        break;
      default:
        break;
    }
    return (
      <div className={props.cls}>
        <div className='form-row col-flex'>
          <p id='choose-events'>Select Your Category</p>

          <div className='justify-spread'>
            {/* FE-SE-TE-BE RADIO BUTTONS */}

            <Radio
              index={1}
              id='Radio1'
              name='year'
              changeHandler={props.setFormData}
              value='FE'
              label='FE'
              checked={checked[0]}></Radio>
            <Radio
              index={2}
              id='Radio2'
              name='year'
              changeHandler={props.setFormData}
              value='SE'
              label='SE'
              checked={checked[1]}></Radio>
            <Radio
              index={3}
              id='Radio3'
              name='year'
              changeHandler={props.setFormData}
              value='TE'
              label='TE'
              checked={checked[2]}></Radio>
            <Radio
              index={4}
              id='Radio4'
              name='year'
              changeHandler={props.setFormData}
              value='BE'
              label='BE'
              checked={checked[3]}></Radio>
          </div>
          <span id='yearErrMsg' className='errormsg'></span>
        </div>
      </div>
    );
  } else return <></>;
};

export default YearWrap;
