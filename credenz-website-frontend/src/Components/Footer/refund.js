import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Footer from './footer';
import Nav from '../Navbar/Navbar';

const Refund =()=>{
    useEffect (()=>{
        document.title=`CREDENZ LIVE `;
      },[]);
    return(<div style={{color:'white', marginTop:'10vh'}}>
        <Nav/>
        <Container style={{minHeight:'100vh'}}>
            <h2>Refund and Cancellation Policy</h2>

            <p>Our focus is complete candidate satisfaction. Please read the fine prints of each event before booking it, it provides all the details about the services or the event you are going to be a part of.  </p>
            <p>Our Policy for the cancellation and refund will be as follows:</p>

            <h4>Cancellation Policy </h4>
            <p>For Cancellations please contact us via <strong>Contact us </strong>details provided below.<br/>
            If you are displeased with the services provided, you are free to cancel your event anytime during the current service period.
            </p>

            <h4>Refund Policy</h4>
            <p>We will try our best to create the suitable working experience for the candidates. </p>
            <p> The amount paid by the candidate will not be refunded at any circumstances.  </p>

            <h4>Contact Us</h4>
            <p> To know more about our Refund and Cancellation Policy, please mail us at: </p>
            <p><a href="mailto:rohanpawar1999@gmail.com">rohanpawar1999@gmail.com</a></p>

            <p>or contact us on: </p>
            <p> +91-9834570868 </p>
</Container>
<Footer/>
    </div>
    );
}

export default Refund;