import React from 'react';
import './Footer.css';

import phoneIcon from '../../assets/phone-svgrepo-com.svg';
import emailIcon from '../../assets/mail-svgrepo-com.svg';
import locationIcon from '../../assets/pin-fill-sharp-circle-634-svgrepo-com.svg';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__contact-container">
        <a
          className="footer__text"
          href="https://www.google.com/maps/place/1096+Calimesa+Blvd+Suite+215,+Calimesa,+CA+92320/@33.9979564,-117.0624768,17z/data=!3m1!4b1!4m6!3m5!1s0x80db50bcf6a6ef79:0xced59b929e22b346!8m2!3d33.997952!4d-117.0599019!16s%2Fg%2F11qp4d0kz9!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={locationIcon}
            alt="Location Icon"
            className="footer__icon address"
          />
          1096 Calimesa Blvd, Suite 215 Calimesa, CA 92320
        </a>
        <a className="footer__text" href="tel:+19093539605">
          <img src={phoneIcon} alt="Phone Icon" className="footer__icon" />
          (909) 353-9605
        </a>
        <a
          className="footer__text"
          href="mailto:BuiltOnLoveFoundation@gmail.com"
        >
          <img
            src={emailIcon}
            alt="Email Icon"
            className="footer__icon email"
          />
          BuiltOnLoveFoundation@gmail.com
        </a>
      </div>
      <p className="footer__text">
        Built On Love Foundation is a registered 501(c)(3) nonprofit
        organization (EIN: 92-2483917). Donations are tax-deductible to the
        fullest extent allowed by law.
      </p>
    </footer>
  );
}
