import React from 'react';
import './Donate-Popup.css';

export default function DonateLinks({ isOpen, onClose }) {
  if (!isOpen) return null;
  const paypalLinks = [
    {
      label: 'GOLF FOURSOME $500',
      url: 'https://www.paypal.com/ncp/payment/NMQ6VLXVG93SE',
    },
    {
      label: 'Single Golfer $125',
      url: 'https://www.paypal.com/ncp/payment/PSXK38KYRY7K6',
    },
    {
      label: 'Tee Sponsor $125',
      url: 'https://www.paypal.com/ncp/payment/YN7PCW7T8S8W8',
    },
    {
      label: 'Meal Ticket Only',
      url: 'https://www.paypal.com/ncp/payment/26UTBGS3XGW8J',
    },
    {
      label: 'Event Sponsor $1500',
      url: 'https://www.paypal.com/ncp/payment/DSHYY23UL9YY6',
    },
    {
      label: 'Exclusive Tournament Sponsor $2500',
      url: 'https://www.paypal.com/ncp/payment/UQD32VPRHXEJG',
    },
    {
      label: 'Beverage Sponsor $750',
      url: 'https://www.paypal.com/ncp/payment/JF229SMP7ACRL',
    },
  ];

  return (
    <div className="donate__overlay" onClick={onClose}>
      <div className="donate__content" onClick={(e) => e.stopPropagation()}>
        <h2>Support Our Mission</h2>
        <p>Select an Event Sponsorship:</p>
        <ul className="donation__links">
          {paypalLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="donation__links-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="close__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
