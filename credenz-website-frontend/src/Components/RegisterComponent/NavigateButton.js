import React from "react";

function NavigateButton(props) {
  if (props.isVisible)
    return (
      <button id={props.id} type='button' onClick={props.handler}>
        {props.children}
      </button>
    );
  else return <></>;
}

export default NavigateButton;