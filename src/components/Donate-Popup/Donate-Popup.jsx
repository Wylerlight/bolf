import React from 'react';
import './Donate-Popup.css';

export default function DonateLinks({ isOpen, onClose }) {
  if (!isOpen) return null;
  const paypalLinks = [
    {
      label: 'EXCLUSIVE TOURNAMENT SPONSOR',
      url: 'https://www.paypal.com/ncp/payment/UQD32VPRHXEJG',
    },
    {
      label: 'EVENT SPONSOR',
      url: 'https://www.paypal.com/ncp/payment/DSHYY23UL9YY6',
    },
    {
      label: 'BEVERAGE SPONSOR',
      url: 'https://www.paypal.com/ncp/payment/JF229SMP7ACRL',
    },
    {
      label: 'GOLF TEE SPONSOR',
      url: 'https://www.paypal.com/ncp/payment/YN7PCW7T8S8W8',
    },
    {
      label: 'SINGLE GOLFER',
      url: 'https://www.paypal.com/ncp/payment/PSXK38KYRY7K6',
    },
    {
      label: 'FOURSOME',
      url: 'https://www.paypal.com/ncp/payment/NMQ6VLXVG93SE',
    },
    {
      label: 'MEAL TICKET ONLY',
      url: 'https://www.paypal.com/ncp/payment/26UTBGS3XGW8J',
    },
    {
      label: 'CUSTOM SPONSOR AMOUNT',
      url: 'https://www.paypal.com/ncp/payment/2AETWAAXM37SJ',
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
