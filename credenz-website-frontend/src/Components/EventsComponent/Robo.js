import React from "react";
import "./robo.css";
import CredenzEye2 from "./Credenzeye2";
// import Animated from "./roboSmall.svg";

function Robo(props) {
  let cls = `robo ${props.cls}`;
  let leftHandCls1 = `braco-esquerdo ${props.moveHandCls1} ${props.left.upper}`;
  let leftHandCls2 = `antebraco-esquerdo ${props.left.lower}`;
  let rightHandCls1 = `braco-direito ${props.moveHandCls2} ${props.right.upper}`;
  let rightHandCls2 = `antebraco-direito ${props.right.lower}`;

  let CredenzEyeId1 = ["eyeball-outer1", "eyeball-inner1"];
  let CredenzEyeId2 = ["eyeball-outer2", "eyeball-inner2"];
  return (
    <div className={cls} onClick={props.onClick}>
      <div id='head'>
        <span className='eari'>
          <span className='earo'></span>
        </span>

        <span className='eari2'>
          <span className='earo2'></span>
        </span>

        <div
          style={{
            position: "relative",
            display: "flex",
            top: "20px",
            width: "60%",
            margin: "auto",
          }}>
          <div
            className='iris'
            style={
              props.isidle
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }></div>
          <div
            className='iris'
            style={
              props.isidle
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }></div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            top: "20px",
            width: "60%",
            margin: "auto",
          }}>
          <div
            className='borda-iris'
            style={
              props.isidle
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }></div>
          <div
            className='borda-iris'
            style={
              props.isidle
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }></div>
        </div>

        <div style={{ display: "flex", margin: "auto", width: "60%" }}>
          <div className='olho'>
            <CredenzEye2
              isidle={props.isidle}
              ids={CredenzEyeId1}></CredenzEye2>
          </div>
          <div className='olho'>
            <CredenzEye2
              ids={CredenzEyeId2}
              isidle={props.isidle}></CredenzEye2>
          </div>
        </div>
        <div style={{ display: "flex", margin: "auto", width: "80%" }}>
          <div className='borda-olho'></div>
          <div className='borda-olho'></div>
        </div>

        <div className='head'></div>
        <div className='antena'></div>
      </div>

      <div className='robo-body'>
        <div className={`peito ${props.lighting}`}>
          <div className='tela'>
            <img
              className={props.isLogo ? "" : "invert"}
              src={props.logoSrc}
              alt=''
            />
          </div>
        </div>
        <div className={leftHandCls1}>
          <div className={leftHandCls2}></div>
        </div>

        <div className={rightHandCls1}>
          <div className={rightHandCls2}></div>
        </div>
      </div>
      <div className='leg'>
        <div className='foot'></div>
        <div className='sombra'></div>
      </div>
    </div>
  );
}

export default Robo;
