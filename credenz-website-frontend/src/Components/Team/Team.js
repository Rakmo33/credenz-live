import React , {useEffect} from "react";
import Member from "../Team/Member";
import { Container, Row } from "react-bootstrap";
import Footer from "../Footer/footer";
import "./newmem.css";
import Nav from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";

const Team = () => {
  let history = useHistory();

  useEffect (()=>{
    document.title=`CREDENZ LIVE | Our Team`;
  },[]);

  return (
    <>
      <Nav />
      <Container
        className='webTeamWrap'
        fluid
        style={{ height: "100%", width: "90%" }}>
        <button id='webTeamGoBack' onClick={() => history.goBack()}>
          ×
        </button>
        <Container
          className='webTeamCardWrap'
          fluid
          style={{ height: "100%", width: "90%" }}>
          <Row style={{ justifyContent: "space-around", marginTop: "20px" }}>
            <Member
              name={"Aditi Srivastava"}
              url={"aditi.jpeg"}
              className='sideway'
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/aditi-srivastava-a6046818a/"}
            />

            <Member
              name={"Fatema Katawala"}
              url={"fsk6.jpg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/fatema-katawala-2b99451a1/"}
            />

            <Member
              name={"Gaurav Ghati"}
              url={"gaurav2.jpeg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/gauravghati/"}
            />
            <Member
              name={"Omkar Dabir"}
              url={"dabir.jpeg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/coderdabir/"}
            />
            {/* <Col md={3}><Member
                            name={"Member 4"}
                            pos={"Web Master"}
                            link={"#"}/>
                </Col> */}
          </Row>
          <Row
            style={{
              justifyContent: "space-around",
              marginTop: "60px",
              marginBottom: "20px",
            }}>
            <Member
              name={"Sakshee Phade"}
              url={"sakshee.jpeg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/saksheephade/"}
            />
            <Member
              name={"Sanket Landge"}
              url={"sanket.jpeg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/sanket-landge-293996194/"}
            />
            <Member
              name={"Shreya Deshpande"}
              url={"shreya.jpg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/shreya-deshpande-420297191/"}
            />

            <Member
              name={"Yash Sonar"}
              url={"yash.jpeg"}
              // pos={"Web Master"}
              link={"https://www.linkedin.com/in/yash-sonar-b89265176/"}
            />

            {/* <Col md={3}><Member
                            name={"Member 4"}
                            pos={"Web Master"}
                            link={"#"}/>
                </Col> */}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Team;
