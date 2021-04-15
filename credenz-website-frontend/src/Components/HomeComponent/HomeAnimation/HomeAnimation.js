import React, { useState, useEffect, Component } from "react";
import "./HomeAnimation.css";
import EyeDea21 from "./AnimationSVGs/EyeDea21";
import EyeDea20 from "./AnimationSVGs/EyeDea20";
import $ from "jquery";
import Footer from "../../Footer/footer";

import '../../../'
import OverlayLogos from "./OverlayLogos";

const HomeAnimation = (props) => {
  const [mechanicalEye, showMechanicalEye] = useState(false);
  const [showLogoTrail, setShowLogoTrail] = useState(false);
  const [disableEye, setDisableEye] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  // let showLogoTrail = false;
  useEffect(() => {
    if (mechanicalEye === true) {
      //console.log("mechanical eye starting");
      setTimeout(() => {
        setShowLogoTrail(true);
        setDisableEye(true);
        //console.log("loading Logo trail");
      }, 9000);
    }
  }, [mechanicalEye]);
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setMobileDevice(true);
      setDisableEye(true);
      setShowLogoTrail(true);
    }

    return () => {
      $("body").css({
        background: "black",
      });

      // alert("LOL");

      $(".nav-colour").css({
        backgroundColor: "#ff0000",
        boxShadow: "0 0 0px 0px #00000055",
      });
    };
  }, []);

  $("body").css({
    background:
      "radial-gradient(circle, rgba(7, 19, 51, 1) 0%, rgba(0, 0, 0, 1) 100%)",
  });

  $(".nav-colour").css({
    backgroundColor: "#00000055",
    // backgroundColor: "red",
    boxShadow: "0 0 10px 5px #00000055",
  });

  return (
    <div className='anim'>
      {mobileDevice ? null : (
        <img
          alt='bg'
          src={require('../../../assests/img/main_bg_2.jpg')}
          className={` ${bgLoaded ? "loadedBG" : "notLoadedBG"} `}
          onLoad={() => {
            setBgLoaded(true);
          }}></img>
      )}

      <div className='anim-iframe anim-overlay-bg'></div>
      <div className={`anim-overlay-logos`}>
        {showLogoTrail ? <OverlayLogos mobile={mobileDevice} /> : null}
      </div>
      {mobileDevice ? null : (
        <div>
          <div className={`${disableEye && "hide"}`}>
            <div
              className={`anim-overlay-lower ${
                mechanicalEye && "hide-after-nine"
              }`}>
              {mechanicalEye === true ? (
                <EyeDea20 triggered={mechanicalEye} />
              ) : null}
            </div>
            <div className={`anim-overlay-upper ${mechanicalEye && "vanish"}`}>
              <EyeDea21 mechanicalEye={showMechanicalEye} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAnimation;
