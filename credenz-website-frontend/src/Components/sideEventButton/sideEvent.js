import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./sideEvent.css";

// import AddIcon from '@material-ui/icons/Add';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';

// const sideEvent = () =>{
//   const renderTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       SideEvents awaiting!!
//     </Tooltip>
//   );
//   return(
//     <OverlayTrigger
//     placement="right"
//     delay={{ show: 250, hide: 400 }}
//     overlay={renderTooltip} >
//       <Fab className={classes.fab} color="primary" aria-label="add">
//       {/* <AddIcon/> */}
//       </Fab>
//     </OverlayTrigger>
//   );
// }

const sideEvent = (props) => {
  var screenHeight = window.screen.height;
  if (screenHeight < 901) {
    $(document).ready(function () {
      // your code here...
      $(".floatingWrap .social  ").css({ transform: "scale(0.85)" });
      $(".floatingWrap .eve  ").css({ transform: "scale(0.85)" });
    });
  } else {
    $(document).ready(function () {
      // your code here...
      $(".floatingWrap .social ").css({ transform: "scale(1)" });
      $(".floatingWrap .eve ").css({ transform: "scale(1)" });
    });
  }

  return (
    <div className='floatingWrap'>
      <div>
        <nav className='social'>
          <ul>
            <li>
              <a
                className='in'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/company/pisbieee/'>
                {" "}
              </a>
            </li>
            <li>
              <a
                className='ig'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/pisbcredenz/'>
                {""}
              </a>
            </li>
            <li>
              <a
                className='fb'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/pisbcredenz/'>
                {""}
              </a>
            </li>
          </ul>
        </nav>
        {/* <img src="socio.png" /> */}
        {/* <nav className={social} >
          <ul>
            <li><img src={require("./fb.svg")} style={{width:"30%"}} /></li>
            <li><img src={require("./ig.svg")} style={{width:"30%"}} /></li>
            <li><img src={require("./in.svg")} style={{width:"30%"}} /></li>
          </ul>
        </nav> */}
      </div>
      <div>
        <ul style={{ float: "right" }} className='socialeve'>
          <li>
            <Link className='eve' to='/events'></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sideEvent;
