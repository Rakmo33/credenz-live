import React from "react";

const EventCard = (props) => {
  return (
    <div className='custom-control event-wrap custom-checkbox custom-control-inline cc-selector'>
      <input
        type='checkbox'
        id={props.id}
        name={`events.${props.name}`}
        value={props.name}
        onChange={props.changeHandler}
        onClick={props.clickHandler}
        checked={props.isChecked}
        className='custom-control-input event-checkboxes'
      />
      <label className={props.cls} htmlFor={props.id}></label>
      <p className='event-name'>{props.name}</p>
      <p className='event-price'>₹{props.price}</p>
    </div>
  );
};
export default EventCard;
