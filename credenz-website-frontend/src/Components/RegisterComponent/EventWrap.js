import React from "react";
import EventCard from "./EventCard";

function EventWrap(props) {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <div className='form-row col-flex'>
          <p id='choose-events'>Choose Events</p>

          <h1 id='total-amount'>Total : ₹{props.total}</h1>

          <span id='eventErrMsg' className='errormsg txt-center'></span>

          <div className='form-group col-md-12 event-icons'>
            {props.events.map((event, index) => {
              let active = event.isChecked ? "active" : "";

              return (
                <EventCard
                  key={index}
                  id={event.id}
                  name={event.name}
                  price={event.price}
                  isChecked={event.isChecked}
                  cls={`custom-control-label event ${event.name} drinkcard-cc ${event.isChecked} ${active}`}
                  changeHandler={props.setFormData}
                  clickHandler={() => props.changeHandler(index)}></EventCard>
              );
            })}
          </div>
        </div>
      </div>
    );
  else return <></>;
}

export default EventWrap;
