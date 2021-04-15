import React from "react";
import "./contact.css";

const ContactCard = ({ img, email, phone, name }) => {
  return (
    <div className='contacts card'>
      <img
        className='contacts-img card-img-top img-pos'
        src={img}
        alt='Card cap'
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          <a className='glinks' href={`mailto:${email} `}>
            {email}
          </a>
        </p>
        <p className='card-text'>{phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
