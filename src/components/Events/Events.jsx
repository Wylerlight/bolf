import React, { useState } from 'react';
import './Events.css';

import sponsorshipPoster from '../../assets/golf-tourny2.JPG';
import tournamentPoster from '../../assets/Golf-Tourny1.JPG';
import sponsorshipInfoPoster from '../../assets/golf-sponsor1.JPG';
import sponsorshipForm from '../../assets/golf-sponsor2.JPG';
import eventsCollage1 from '../../assets/events-collage1.JPG';
import eventsCollage2 from '../../assets/events-collage2.JPG';

export default function Events() {
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
        <button className="events__button">SIGN UP HERE</button>
      </section>

      <section className="past__events" id="past-events">
        <h2 className="events__title">PAST EVENTS</h2>
        <p className="events__text">
          WHAT WE DO We help as many people as we can and we have fun doing it!
        </p>
        <p className="events__text">
          Our Impact: Each year, we serve thousands of local residents through
          four major community-driven initiatives: - **Easter Basket Giveaway**
          – Providing joy to children and families with Easter-themed care
          packages. - **Back-to-School Supply Drive** – Equipping students with
          essential school supplies to start the year strong. - **Thanksgiving
          Food Drive** – Distributing meals to families in need so they can
          celebrate the holiday with dignity. - **Christmas Family Gift
          Support** – Ensuring children and families experience the joy of the
          season through donated gifts.
        </p>
        <div className="past__events-container">
          <img src={eventsCollage1} alt="Event 1" className="events__collage" />
          <img src={eventsCollage2} alt="Event 2" className="events__collage" />
        </div>
      </section>
    </>
  );
}
