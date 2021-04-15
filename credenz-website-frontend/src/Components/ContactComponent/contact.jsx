import React from "react";
// import user from "./user.png";
import durvesh from "../../assests/img/team/Durvesh.jpg";
import rohan from "../../assests/img/team/Rohan2.jpeg";
import onkar from "../../assests/img/team/onkar.jpg";
import "./contact.css";
import ContactCard from "./contactCard";
import Social from "../sideEventButton/sideEvent";
import Footer from "../Footer/footer";

const ContactUs = () => {
  return (
    <div>
      <div style={{ height: "100%" }}>
        <div className='row content' style={{ marginTop: "20px" }}>
          <ContactCard
            img={onkar}
            email='jr.onkarlitake@gmail.com'
            phone='+91 988114969'
            name='Onkar Litake'
          />
          <ContactCard
            img={durvesh}
            email='durveshmalpurecoc@gmail.com'
            phone='+91 9172952268'
            name='Durvesh Malpure'
          />
          <ContactCard
            img={rohan}
            email='rohanpawar1999@gmail.com'
            phone='+91 9834570868'
            name='Rohan Pawar'
          />
        </div>

        <div className='addr row'>
          <div className='col-md-12'>
            {/* <h2 className="address">Address</h2> */}
          </div>
          <div className='col-md-12'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254197!2d73.84864491506187!3d18.457542087445784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1603520633684!5m2!1sen!2sin'
              width='2000'
              height='600'
              frameBorder='0'
              style={{ border: "0", filter: "invert(90%)" }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
              title='iframe'></iframe>
          </div>
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default ContactUs;
