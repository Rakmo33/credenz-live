import React from 'react';
import './OverlayLogos.css';

function OverlayLogos({mobile}) {
  
  const clickHandler = () => {
    //console.log("Clicked on logo")
    window.location.reload();
  }
  return(
    <div>
      {mobile ? <img className="sizing-mobile zoomInDown" onClick={()=>clickHandler()} src={require('../../../assests/img/c-live-vertical.png')}/> : <img className="sizing zoomInDown" onClick={()=>clickHandler()} src={require('../../../assests/img/c-live.png')}/>}
    </div>
  );
}

export default OverlayLogos;
