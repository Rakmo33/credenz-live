import React, { useState, useEffect } from "react";
import "./animation.css";
import EventModal from "./EventModal";
import Robo from "./Robo";
import { info } from "./info";
import Event from "./EventCard.js";

function Animation(props) {
  const [cls1, setCls1] = useState("");
  const [cls2, setCls2] = useState("");
  const [cls3, setCls3] = useState("hide-robo");
  const [moveHandCls1, setMoveHandCls1] = useState("");
  const [moveHandCls2, setMoveHandCls2] = useState("");
  const [modalCls, setModalCls] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [label, setLabel] = useState("");
  const [lighting, setLighting] = useState("");
  const [logoScreen, setLogoScreen] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);
  //const [teamAllowed, setTeamAllowed] = useState([]);
  const [eventReg, setEventReg] = useState([]); //single person team registered for respective event in cart

  let leftHand = {
    upper: "",
    lower: "",
  };

  let rightHand = {
    upper: "",
    lower: "",
  };

  const [leftHandMoveCls, setLeftHandMoveCls] = useState(leftHand);
  const [rightHandMoveCls, setRightHandMoveCls] = useState(rightHand);

  let roboTextTimer;

  const robotTypeMsg = (textString) => {
    let roboTextString = textString;
    /* type your text here */
    let roboTextArray = roboTextString.split("");
    let textMsg = document.getElementById("Robotext");

    clearTimeout(roboTextTimer);
    textMsg.innerHTML = "";

    const robotextFrameLooper = () => {
      if (roboTextArray.length > 0) {
        textMsg.innerHTML += roboTextArray.shift();
      } else {
        clearTimeout(roboTextTimer);
      }
      roboTextTimer = setTimeout(
        robotextFrameLooper,
        15
      ); /* change 70 for speed */
    };

    setTimeout(() => {
      robotextFrameLooper();
    }, 10);
  };

  useEffect(() => {
    clearTimeout(roboTextTimer);

    setIsGrid(false);

    setTimeout(() => {
      setIsGrid(true);
      setCls1("fadeOut1");
      setCls2("fadeOut2");
      setCls3("");
      setModalCls("");

      setTimeout(() => {
        setCls1("");
        setCls2("");
      }, 1);
    }, 300);
    robotTypeMsg("Hello there, Credenz is here!");

    return () => {
      clearTimeout(roboTextTimer);
      document.getElementById("Robotext").innerHTML = "";

      setTimeout(() => {}, 10);
    };
  }, []);

  const eventsHoverHandler = (index, e) => {
    // $(".evePageCards").forEach((item) => {
    //   item.unbind("hover");
    // });

    document.querySelector(".roboMsg").classList.remove("slide-up");
    setTimeout(() => {
      document.querySelector(".roboMsg").classList.add("slide-up");
      document.getElementById("Robotext").innerHTML = "";

      robotTypeMsg(info[index].tagline);
    }, 300);
  };

  const eventsClickHandler = (index, e) => {
    setIndex(index);

    // robotextFrameLooper();
    setLighting("lighting");
    setIsIdle(false);

    const eventCard = e.target;

    eventCard.className = "evePageCards customCard  button ice detect red";
    setLogoScreen(true);

    setTimeout(() => {
      eventCard.className = "evePageCards customCard button ice detect blue";
      setLogoScreen(false);
    }, 300);

    setTimeout(() => {
      eventCard.className = "evePageCards customCard button ice detect red";
      setLogoScreen(true);
    }, 700);

    setTimeout(() => {
      eventCard.className = "evePageCards customCard button ice detect green";
      setLogoScreen(false);

      setLabel("detected");
    }, 1100);

    setTimeout(() => {
      setLighting("");

      setCls1("fadeOut1");
      setCls2("fadeOut2");
      index < 6 ? setCls3("slideRight") : setCls3("slideLeft");

      setTimeout(() => {
        setCls1("fadeOut1 hide");
        setCls2("fadeOut2 hide");

        if (index < 6) {
          setMoveHandCls1("moveHand");
          setMoveHandCls2("");

          let temp = { ...leftHand };
          temp.upper = "";
          temp.lower = "";
          setLeftHandMoveCls(temp);

          temp = { ...rightHand };
          temp.upper = "";
          temp.lower = "";
          setRightHandMoveCls(temp);
        } else {
          let temp = { ...leftHand };
          temp.upper = "switchHand1a";
          temp.lower = "switchHand1b";
          setLeftHandMoveCls(temp);

          setTimeout(() => {
            temp = { ...rightHand };
            temp.upper = "switchHand2a";
            temp.lower = "switchHand2b";
            setRightHandMoveCls(temp);
          }, 150);

          setTimeout(() => {
            setMoveHandCls2("moveHand2");
          }, 800);
        }

        setIsGrid(false);

        setTimeout(() => {
          index < 6 ? setModalCls("showModal1") : setModalCls("showModal2");
        }, 1);
      }, 300);
    }, 1800);
  };

  const closeModalHandler = () => {
    setLogoScreen(true);
    setLabel("");

    setIsIdle(true);

    setCls3("");

    setMoveHandCls1("");
    setMoveHandCls2("");

    let temp = { ...leftHand };

    setTimeout(() => {
      temp.upper = "";
      temp.lower = "";
      setLeftHandMoveCls(temp);
    }, 150);

    temp = { ...rightHand };
    temp.upper = "";
    temp.lower = "";
    setRightHandMoveCls(temp);

    modalCls === "showModal2" ? setModalCls("shiftRight") : setModalCls("");

    setTimeout(() => {
      setIsGrid(true);
      setCls1("fadeOut1");
      setCls2("fadeOut2");
      setModalCls("");

      setTimeout(() => {
        setCls1("");
        setCls2("");
      }, 1);
    }, 300);
  };

  return (
    <div className='eve-anim-wrap'>
      <div className={`eve-anim ${isGrid ? "" : "flex"}`}>
        {isGrid ? (
          <div className='events-grid'>
            {info.map((item, index) => {
              if (index < 6)
                return (
                  <Event
                    key={index}
                    id={index}
                    onClick={(e) => {
                      eventsClickHandler(index, e);
                    }}
                    onHover={(e) => {
                      eventsHoverHandler(index, e);
                    }}
                    src={item.src}
                    name={item.title}
                    cls={cls1}
                    gridNumber={"grid1"}
                    delayCls={
                      index % 6 === 0 || index % 6 === 1
                        ? "firstRow"
                        : index % 6 === 2 || index % 6 === 3
                        ? "secondRow"
                        : "thirdRow"
                    }></Event>
                );
              else return null;
            })}
          </div>
        ) : (
          <EventModal
            info={info[index]}
            cls={modalCls}
            cart={cart}
            setCart={setCart}
            eventReg={eventReg}
            setEventReg={setEventReg}
            addToCart={props.addToCart}
            callLoginModal={props.callLoginModal}
            teams={props.teams}
            onClick={closeModalHandler}
            checkIfRegistered={props.checkIfRegistered}></EventModal>
        )}
        <div className='roboWrap '>
          <div
            className={
              isGrid && label === "detected"
                ? `roboMsg`
                : isGrid
                ? "roboMsg  slide-up"
                : "roboMsg"
            }>
            {/* <p>Clash is for the best Competetive</p>
            <p>Programmers!</p> */}
            <span></span>
            <div id='RobotextWrap'>
              <p id='Robotext'></p>
            </div>
          </div>
          <Robo
            cls={cls3}
            moveHandCls1={moveHandCls1}
            moveHandCls2={moveHandCls2}
            right={rightHandMoveCls}
            left={leftHandMoveCls}
            isidle={isIdle}
            lighting={lighting}
            isLogo={logoScreen}
            logoSrc={
              logoScreen ? "/logos/credenz19Logo.png" : info[index].src
            }></Robo>
        </div>
        {isGrid ? (
          <div className='events-grid'>
            {info.map((item, index) => {
              if (index > 5)
                return (
                  <Event
                    key={index}
                    id={index + 6}
                    onClick={(e) => {
                      eventsClickHandler(index, e);
                    }}
                    onHover={(e) => {
                      eventsHoverHandler(index, e);
                    }}
                    src={item.src}
                    name={item.title}
                    cls={cls2}
                    gridNumber={"grid2"}
                    delayCls={
                      index % 6 === 0 || index % 6 === 1
                        ? "firstRow"
                        : index % 6 === 2 || index % 6 === 3
                        ? "secondRow"
                        : "thirdRow"
                    }></Event>
                );
              else return null;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Animation;
