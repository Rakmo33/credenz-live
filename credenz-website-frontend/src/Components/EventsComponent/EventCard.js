import React from "react";
import "./eventCard.css";

function eventCard(props) {
  let cls = `event-wrap  ${props.cls}`;

  return (
    <div
      id={props.id}
      className={` ${cls}`}
      // info={props.info}
      onClick={props.onClick}
      onMouseEnter={props.onHover}>
      <div
        className={`evePageCards customCard button ice ${props.gridNumber} ${props.delayCls} `}>
        <span id='scanner'></span>
        <span id={`glow`} className={`${props.gridNumber}`}></span>
        <span className='corner top left'></span>
        <span className='corner top right'></span>
        <span className='corner bottom left'></span>
        <span className='corner bottom right'></span>
        <img src={props.src} alt='' />
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default eventCard;
