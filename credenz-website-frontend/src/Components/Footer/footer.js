import React from "react";
import "./footer.css";
import "../ContactComponent/contact.css";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
// import policy from './policy.html';

const footer = () => {
  return (
    <div className='footer'>
      <Container
        fluid
        className='footerContainer'
        style={{ textAlign: "center"}}>
        <Row style={{margin:'10px 0'}}>
          {/* <span className={"footer-font"}> */}
          <Col lg={4} className={"footer-font "}>
            {" "}
            &#169; PICT IEEE Student Branch{" "}
          </Col>

          <Col lg={4}>
            Developed with &#9829; by PISB &nbsp;{" "}
            <Link to='/team'>
              <span style={{ color: "#6eabce" }}> Web Team</span>
            </Link>{" "}
          </Col>
          <Col lg={4} className=''>
            <Link to='privacy'>Policy</Link>
            &nbsp; <Link to='terms'> Terms </Link>
            &nbsp; <Link to='refund'> Refund </Link>
          </Col>
          {/* </span> */}
        </Row>

        <Row className='hiddenRow'>
          <div className=''>
            <a
              className='iconfb'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/pisbcredenz/'>
              {" "}
              <i className={"fa fa-facebook"}></i>
            </a>
            <a
              className='iconlink'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/company/pisbieee/'>
              {" "}
              <i className={"fa fa-linkedin"}></i>
            </a>
            <a
              className='iconinsta'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/pisbcredenz/'>
              {" "}
              <i className={"fa fa-instagram"}></i>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
