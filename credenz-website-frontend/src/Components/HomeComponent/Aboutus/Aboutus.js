import React, {useEffect} from "react";
import { Row, Container, Col } from "react-bootstrap";
import classes from "./Aboutus.module.css";
// import { FadeInUp, FadeInRight } from "animate-components";
// import Timer from "../Timer";
import Nav from "../../Navbar/Navbar";
import sponsorclass from "../HomeComponent.module.css";
import SideEventButton from "../../sideEventButton/sideEvent";
import Footer from "../../Footer/footer";
import Sponsors from "../sponsors/sponsors";

const Aboutus = () => {

  useEffect (()=>{
    document.title=`CREDENZ LIVE | About Us`;
  },[]);

  return (
    <div style={{background:'black'}} >
      <Nav />
      <div id='size'>
        <Container id='Aboutus' className={classes.AboutusContainer}>
          <h1
            className={classes.mid}
            style={{ color: "#dadada", marginTop: "100px" }}>
            About Us
          </h1>
          <Row className={classes.credenz}>
            <Col className={classes.content} sm={8}>
              <div
                data-aos='fade-up'
                data-aos-mirror='true'
                data-aos-offset='200'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'>
                {" "}
                <h3 className={classes.mid}>Credenz</h3>
                <p>
                  Credenz is the annual technical festival organised by the PICT
                  IEEE Student Branch. Started in 2004, with a view to elicit
                  the best out of each and everyone, it has grown to become one
                  of the finest technical events in Pune. Credenz aims not only
                  to infuse a competitive spirit among participants but also
                  widen their horizons in the ever-changing field of technology
                  via myriad seminars and workshops.
                  <br />
                  Participants get a chance to discover their talents and thrive
                  in numerous events like Clash, B Plan, RoboLIGA, WebWeaver,
                  Pixelate, Cretronix, Paper Presentation and DataWiz. This is a
                  unique chance for the students to go beyond the traditional
                  spheres of academics and make the most of their potential.
                  This spirit of learning and discovery has inspired the PICT
                  IEEE Student Branch to present Credenz, a podium for you to
                  nurture and cultivate your talents.
                </p>
              </div>
            </Col>
            <Col
              data-aos='zoom-in'
              data-aos-mirror='true'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
              className={classes.logo_pos}
              sm={4}>
              <img
                className={classes.img_size_cred}
                alt='black'
                src={require("../../../assests/img/live30.png")}
              />
            </Col>
          </Row>
          <Row className={classes.pisb}>
            <Col
              data-aos='zoom-in'
              data-aos-mirror='true'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'
              className={classes.logo_pos}
              sm={4}>
              <img
                className={classes.img_size_pisb}
                alt='pisbdark'
                src={require("../../../assests/img/logopisb.png")}
              />
            </Col>
            <Col className={classes.content} sm={8}>
              <div
                data-aos='fade-up'
                data-aos-mirror='true'
                data-aos-offset='200'
                data-aos-easing='ease-in-sine'
                data-aos-duration='600'>
                {" "}
                <p>
                PICT IEEE Student Branch (PISB) was established in the year 1988 with an aim of inculcating a sense of technical awareness amongst its student members. 
                PISB aims to escalate the knowledge and trends in the diverse fields of technologies amongst its members. PISB upholds two major events every year - 
                Credenz and Credenz Tech Dayz with the first one being conducted in odd semester and the latter one in even semester. PISB is also marked by its Women in
                 Engineering (WIE) chapter, an initiative for the empowerment of women.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={classes.credenz}>
          <Col className={classes.content} sm={8}>
            <div
              data-aos='fade-up'
              data-aos-mirror='true'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='600'>
              {" "}
              <h3 className={classes.mid}> PICT IEEE Newsletter Group (P.I.N.G.)</h3>
              <p>
              P.I.N.G. (PICT IEEE Newsletter Group) is the annual technical magazine published 
              by the student members of PICT IEEE Student Branch  (PISB). P.I.N.G. serves as a 
              platform for individuals to portray their technical ingenuity. It highlights 
              articles on cutting-edge technologies from technocrats all around the globe. 
              It also features interviews of distinguished personalities in various technical
               domains. P.I.N.G. aims at keeping its readers updated on recent developments in 
               technology and helps them extrapolate their perceptions to contemporary ideas of 
               modernisation. With the imminent Issue 16.1, be ready to get P.I.N.G.'d! 
              </p>
            </div>
          </Col>
          <Col
            data-aos='zoom-in'
            data-aos-mirror='true'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            data-aos-duration='600'
            className={classes.logo_pos}
            sm={4}>
            <img
              className={classes.img_size_cred}
              alt='black'
              src={require("../../../assests/img/15.1.png")}
            />
          </Col>
        </Row>
      </Container>
      <Container className={classes.AboutusContainer} >
        <div className={sponsorclass.sponsor}>
          {" "}
          <Sponsors />
        </div>
      </Container>
      </div>
      <SideEventButton />
      <Footer />
    </div>
  );
};

export default Aboutus;
