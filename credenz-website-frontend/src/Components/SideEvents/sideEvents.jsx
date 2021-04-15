import React, { useState, useEffect } from "react";
import Leaderboard from "./leaderboard";
import Social from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import SideEventCards from "./sideEventCards";
import Nav from "../Navbar/Navbar";
const SideEvents = () => {
  const [select, setSelect] = useState("Play");

  const handleSelect = (select) => {
    setSelect(select);
  };

  useEffect(() => {
    document.title = `CREDENZ LIVE | Side Events`;
  }, []);

  return (
    <div style={{ background: "black" }} className='container-fluid cont'>
      <Nav />
      <div className='row head'>
        <div className='col-xl-10 col-md-10 '>
          <div
            className='row nav'
            style={{ height: "100%", marginTop: "50px" }}>
            {/* <div
              className={
                select === "Play" ? "col-xl-6 tab select" : "col-xl-6 tab"
              }>
              <h3 onClick={() => handleSelect("Play")}>Side Events</h3>
            </div> */}
            {/* <div
              className={
                select === "Leaderboard"
                  ? "col-xl-6 tab select"
                  : "col-xl-6 tab"
              }>
              <h3 onClick={() => handleSelect("Leaderboard")}>Leaderboard</h3>
            </div> */}
          </div>
        </div>
      </div>
      <Social />
      {select === "Play" ? <SideEventCards /> : <Leaderboard />}
      <Footer />
    </div>
  );
};

export default SideEvents;
