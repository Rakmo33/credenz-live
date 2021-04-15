import React, { useEffect } from "react";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import SideEventButton from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";
import Nav from "../Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    document.title = `CREDENZ LIVE | Home`;
  }, []);
  return (
    <div className='homeWrap'>
      <Nav homePage='homePage' />
      <HomeAnimation />
      <SideEventButton />
      <Footer />
    </div>
  );
};

export default Home;
