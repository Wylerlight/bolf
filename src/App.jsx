import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import SponsorsMarquee from './Sponsors';
import MailChimp from './components/MailChimp/MailChimp';

import boardOfDirectorsPoster from './assets/BOLF Board.jpg';

function App() {
  const platinumSponsors = ['IEE', 'Modern Woodmen', 'Amlani Insurance Agency'];
  const goldSponsors = ['Prospect', 'Fidelity', 'Craig & Sons', 'Paulson'];

  return (
    <>
      <Navbar />
      <section id="page-top" className="navbar__line"></section>

      <main className="main">
        <section id="about" className="about">
          <div className="welcome">
            <p className="welcome__text" id="welcome-title">
              WELCOME TO THE BUILT ON LOVE FOUNDATION!
            </p>
            <div>
              <p className="welcome__text">-OUR MISSION-</p>
              <p className="welcome__text">
                The{' '}
                <span style={{ color: '#FF5733' }}>
                  BUILT ON LOVE FOUNDATION
                </span>{' '}
                is dedicated to uplifting underprivileged individuals and
                families in the Inland Empire, with a direct focus on the
                Yucaipa to Banning Pass area. Through our efforts, we aim to
                bridge the gap for those struggling to make ends meet, ensuring
                that no family goes without essential support during critical
                times of the year.
              </p>
            </div>
            <div>
              <p className="welcome__text" id="bible">
                JAMES 1:22
              </p>
              <p className="welcome__text" id="bible">
                "But be doers of the word, and not hearers only, deceiving
                yourselves"
              </p>
              <p className="welcome__text">
                CORE VALUES ✝ Belief in God Support in Community Care for
                Orphans & Widows Education for All
              </p>
            </div>
          </div>

          <section className="welcome__secondary">
            <div className="youtube">
              <div className="youtube__container">
                <iframe
                  width="350"
                  height="560"
                  src="https://www.youtube.com/embed/7hS-FOpFOnU"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="contact__button">
              <h2 className="contact__button-text">
                Subscribe to keep up to date!
              </h2>
              <MailChimp />
            </div>
            <div className="welcome__about-extra">
              <p className="a">
                <span className="a__span">WHO WE ARE:</span>
                <br />
                We are doers of the WORD
              </p>
              <p className="b">
                We love to give back to our community through combined efforts.
                We support local children through community events such as the{' '}
                <span style={{ color: '#FF5733' }}>Easter Drive</span> and give
                away event,{' '}
                <span style={{ color: '#FF5733' }}>
                  Thanksgiving Food Drive
                </span>
                , and{' '}
                <span style={{ color: '#FF5733' }}>Back To School Drive</span>.
                Our hearts are firmly planted in caring for those who need it at
                the time they need it.
              </p>
              <p className="c">
                <span className="a__span">WHAT WE DO:</span>
                <br />
                We help as many people as we can and we have fun doing it!
              </p>
            </div>
          </section>
        </section>
        <section className="sponsors">
          <h2 className="sponsors__title">THANK YOU TO OUR SPONSORS! </h2>
          <SponsorsMarquee sponsors={platinumSponsors} scrollSpeed="20" />
          <SponsorsMarquee sponsors={goldSponsors} scrollSpeed="21" />
        </section>

        <section className="board__directors">
          <img
            src={boardOfDirectorsPoster}
            alt="Board of directors poster"
            className="board__directors-poster"
          />
          <div className="board__directors-container">
            <h2 className="board__directors-title">
              MEET OUR BOARD OF DIRECTORS
            </h2>

            <p className="board__names-list">
              Danielle Soto-Marrufo - C&D Real Estate
            </p>
            <p className="board__names-list">Cesar Marrufo - C&D Real Estate</p>
            <p className="board__names-list">
              Joe Amlani - Amlani Insurance Agency
            </p>
            <p className="board__names-list">
              Kevin Cisneroz - Inland Empire Escrow
            </p>
            <p className="board__names-list">
              Steven Burns - Cross Country Mortgage
            </p>
          </div>
        </section>
      </main>
      <div className="contact__button">
        <h2 className="contact__button-text">Subscribe to keep up to date!</h2>
        <MailChimp />
      </div>
      <Events />
      <div className="contact__button">
        <h2 className="contact__button-text">Subscribe to keep up to date!</h2>
        <MailChimp />
      </div>
      <Footer />
      <div className="copyright">
        <p className="copyright__text">© 2025 Built On Love Foundation</p>
      </div>
    </>
  );
}

export default App;
