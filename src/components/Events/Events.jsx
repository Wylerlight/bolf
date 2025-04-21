import React, { useState } from 'react';
import './Events.css';

import DonateLinks from '../Donate-Popup/Donate-Popup';

import sponsorshipPoster from '../../assets/golf-poster2.jpg';
import tournamentPoster from '../../assets/golf-poster1.jpg';
import sponsorshipInfoPoster from '../../assets/golf-poster3.jpg';
import sponsorshipForm from '../../assets/golf-poster4.jpg';
import eventsCollage1 from '../../assets/events-collage1.JPG';
import eventsCollage2 from '../../assets/events-collage2.JPG';

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="current__events" id="upcoming-events">
        <h2 className="events__title">
          UPCOMING EVENTS AND SPONSORSHIP OPPORTUNITIES
        </h2>

        <div className="events__container">
          <img src={tournamentPoster} alt="Event 1" className="events__image" />
          <img
            src={sponsorshipPoster}
            alt="Event 2"
            className="events__image"
          />
          <img
            src={sponsorshipInfoPoster}
            alt="Sponsorship Info"
            className="events__image"
          />
          <img
            src={sponsorshipForm}
            alt="Sponsorship Form"
            className="events__image"
          />
        </div>
        <button
          className="events__signup-button"
          onClick={(e) => {
            e.preventDefault();
            handleDonateClick();
          }}
        >
          SIGN UP HERE
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
      {isOpen && <DonateLinks isOpen={isOpen} onClose={handleDonateClick} />}
    </>
  );
}
