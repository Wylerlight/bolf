import React, { useState } from 'react';
import './Events.css';

import DonateLinks from '../Donate-Popup/Donate-Popup';
import DonateOnly from '../Donate-Popup/Donate-Only';
import Nominate from '../Donate-Popup/Nominate';

import Thanksgiving from '../../assets/Thanksgiving Poster.jpg';
import Christmas from '../../assets/Christmas Poster.jpg';
import nominateBanner from '../../assets/BOLF Google Header .jpg';
import eventsCollage1 from '../../assets/events-collage1.JPG';
import eventsCollage2 from '../../assets/events-collage2.JPG';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNominate, setIsNominate] = useState(false);

  const handleDonateClick = () => {
    setIsOpen(!isOpen);
  };
  const handleNominateClick = () => {
    setIsNominate(!isNominate);
  };
  return (
    <>
      <section className="current__events" id="upcoming-events">
        <h2 className="events__title">
          CURRENT OUTREACH EVENTS <br /> 🦃 THANKSGIVING 🦃
        </h2>
        <button
          className="events-nominate-wrapper"
          onClick={handleNominateClick}
        >
          <img
            src={nominateBanner}
            alt="Thanksgiving nominate banner"
            className="nominate-banner"
          />
        </button>
        <div className="events__container">
          <img src={Thanksgiving} alt="Event 1" className="events__image" />
          <img src={Christmas} alt="Event 2" className="events__image" />
        </div>
        <button
          className="events__signup-button"
          onClick={(e) => {
            e.preventDefault();
            handleDonateClick();
          }}
        >
          DONATE
        </button>
      </section>

      <section className="past__events" id="past-events">
        <h2 className="events__title">PAST EVENTS</h2>
        <p className="events__text">
          <span style={{ color: '#005f08' }}>Our Impact:</span> Each year, we
          serve thousands of local residents through four major community-driven
          initiatives: <br />
          <span style={{ color: '#FF5733' }}>Easter Basket Giveaway</span> -
          Providing joy to children and families with Easter-themed care
          packages. <br />
          <span style={{ color: '#FF5733' }}>
            Back-to-School Supply Drive
          </span>{' '}
          - Equipping students with essential school supplies to start the year
          strong. <br />
          <span style={{ color: '#FF5733' }}>Thanksgiving Food Drive</span> -
          Distributing meals to families in need so they can celebrate the
          holiday with dignity. <br />
          <span style={{ color: '#FF5733' }}>
            Christmas Family Gift Support
          </span>{' '}
          - Ensuring children and families experience the joy of the season
          through donated gifts.
        </p>
        <div className="past__events-container">
          <img src={eventsCollage1} alt="Event 1" className="events__collage" />
          <img src={eventsCollage2} alt="Event 2" className="events__collage" />
        </div>
      </section>
      {isOpen && <DonateOnly isOpen={isOpen} onClose={handleDonateClick} />}
      {isNominate && (
        <Nominate isOpen={isNominate} onClose={handleNominateClick} />
      )}
    </>
  );
}
