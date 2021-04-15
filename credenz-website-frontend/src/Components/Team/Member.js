import React from "react";
// import classes from "./Member.module.css";
// import Card from "react-bootstrap/Card";
import "./newmem.css";
// import '../../assests/img/team/'
const member = (props) => {
  return (
    // <Card className={classes.member}>
    //   <Card.Img
    //     variant='top'
    //     src={require("../../assests/img/team/" + props.url)}
    //     className={classes.image}
    //   />
    //   {/* <img src={require('../../assests/img/team/' + props.url)}  /> */}
    //   <Card.Body className={classes.teamCardBody}>
    //     <Card.Title>
    //       {" "}
    //       <h5>{props.name}</h5>
    //     </Card.Title>
    //     {/* <Card.Title>{props.pos}</Card.Title> */}
    //     <h4 className={classes.icon}>
    //       <a href={props.link} target='_blank' rel='noopener noreferrer'>
    //         <i className='fa fa-linkedin'></i>
    //       </a>
    //     </h4>
    //   </Card.Body>
    // </Card>
    // <div className="container">
    //   <div className="row">
    //       <div className="col-md-3 col-sm-6">
    <div className='our-team'>
      <div className='pic image'>
        <img
          style={{}}
          src={require("../../assests/img/team/" + props.url)}
          alt=''
        />
        <a
          className='read-more icon'
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa fa-linkedin'></i>
        </a>
        {/* <a href="#" className="read-more">read more</a> */}
      </div>
      <div className='team-content'>
        <h3 className='title'>{props.name}</h3>
        <span className='post'>{props.pos}</span>
      </div>
    </div>
    // </div>

    // {/* <div className="col-md-3 col-sm-6">
    //     <div className="our-team">
    //         <div className="pic">
    //             <img src="images/img-2.jpg" alt=""/>
    //             <a href="#" className="read-more">read more</a>
    //         </div>
    //         <div className="team-content">
    //             <h3 className="title">kristina</h3>
    //             <span className="post">Web Designer</span>
    //         </div>
    //     </div>
    // </div> */}
    //   </div>
    // </div>
  );
};

export default member;
