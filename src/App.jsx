import { useState } from 'react';
import { ReactLenis } from 'lenis/react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/Hamburger-Menu/Hamburger-Menu';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import SponsorsMarquee from './Sponsors';
import MailChimp from './components/MailChimp/MailChimp';

import DonateLinks from './components/Donate-Popup/Donate-Popup';
import DonateOnly from './components/Donate-Popup/Donate-Only';
import DonateOnlyButton from './components/Buttons/Donate-Only-Button';
import Nominate from './components/Donate-Popup/Nominate';
import AnimatedBoard from './components/Board/AnimatedBoard';

import boardOfDirectorsPoster from './assets/BOLF Board New.jpg';

import Carousel from './components/Carousel/Carousel';

function App() {
  // const lenis = useLenis((lenis) => {
  //   console.log('Lenis instance:', lenis);
  // });

  const platinumSponsors = [
    'Inland Empire Escrow',
    'Modern Woodmen',
    'Amlani Insurance Agency',
  ];
  const goldSponsors = ['Prospect', 'Fidelity', 'Craig & Sons', 'Paulson'];

  // FUNCTIONS

  const [isOpen, setIsOpen] = useState(false);
  const [isDonateOnly, setIsDonateOnly] = useState(false);

  const handleDonateClick = () => {
    setIsOpen(!isOpen);
  };
  const handleDonateOnlyClick = () => {
    setIsDonateOnly(!isDonateOnly);
  };
  return (
    <>
      <ReactLenis root />
      {/* Hamburger Menu - Rendered at top level for true full-screen overlay */}
      <HamburgerMenu
        handleDonateClick={handleDonateClick}
        handleDonateOnlyClick={handleDonateOnlyClick}
      />
      <Navbar
        handleDonateClick={handleDonateClick}
        handleDonateOnlyClick={handleDonateOnlyClick}
      />
      {/* <section id="page-top" className="navbar__line"></section> */}
      <section id="about" className="about">
        <Carousel />
      </section>{' '}
      <main className="main">
        <section id="events">
          <Events />
        </section>
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
          <div className="donate-only-btn">
            <DonateOnlyButton
              openDonateModal={handleDonateOnlyClick}
              styleIdentifier={'donate-main'}
            />
          </div>{' '}
          <div className="welcome__about-extra">
            <div className="about-section">
              <div className="about-header">
                <h2 className="about-title">WHO WE ARE</h2>
                <div className="about-accent-line"></div>
              </div>
              <p className="about-description">
                We are <strong>doers of the WORD</strong> – a community-driven
                foundation dedicated to transforming lives through faith-based
                action and compassionate service.
              </p>
            </div>

            <div className="mission-section">
              <div className="mission-content">
                <h3 className="mission-subtitle">Our Mission</h3>
                <p className="mission-description">
                  We love to give back to our community through combined efforts
                  and heartfelt dedication. We support local families and
                  children through transformative community events including:
                </p>
                <div className="mission-events">
                  <div className="event-item">
                    <span className="event-icon">🐰</span>
                    <span className="event-name">Easter Drive & Giveaway</span>
                  </div>
                  <div className="event-item">
                    <span className="event-icon">🦃</span>
                    <span className="event-name">Thanksgiving Food Drive</span>
                  </div>
                  <div className="event-item">
                    <span className="event-icon">🎒</span>
                    <span className="event-name">Back To School Drive</span>
                  </div>
                </div>
                <p className="mission-heart">
                  Our hearts are firmly planted in caring for those who need it
                  at the time they need it most.
                </p>
              </div>
            </div>

            <div className="purpose-section">
              <div className="purpose-header">
                <h2 className="purpose-title">WHAT WE DO</h2>
                <div className="purpose-accent-line"></div>
              </div>
              <p className="purpose-description">
                We help as many people as we can, and we have{' '}
                <strong>fun doing it!</strong>
                Every initiative is powered by love, community spirit, and the
                belief that together we can make a lasting difference in the
                Inland Empire.
              </p>
            </div>
          </div>{' '}
        </section>
        {/* Contact and Donate section for consistent styling and centering */}
        <section className="contact-donate-section">
          <div className="contact__button">
            <h2 className="contact__button-text">
              Subscribe to keep up to date!
            </h2>
            <MailChimp />
          </div>
          <div className="donate-only-btn">
            <DonateOnlyButton
              openDonateModal={handleDonateOnlyClick}
              styleIdentifier={'donate-main'}
            />
          </div>
        </section>{' '}
        <section className="sponsors">
          <h2 className="sponsors__title">THANK YOU TO OUR SPONSORS! </h2>
          <SponsorsMarquee
            sponsors={platinumSponsors}
            scrollSpeed="25"
            tier="platinum"
          />
          <SponsorsMarquee
            sponsors={goldSponsors}
            scrollSpeed="30"
            tier="gold"
          />{' '}
        </section>
        <AnimatedBoard boardOfDirectorsPoster={boardOfDirectorsPoster} />
      </main>
      <div className="contact__button">
        <h2 className="contact__button-text">Subscribe to keep up to date!</h2>
        <MailChimp />
      </div>
      <div className="donate-only-btn">
        <DonateOnlyButton
          openDonateModal={handleDonateOnlyClick}
          styleIdentifier={'donate-main'}
        />
      </div>
      <Footer />
      <div className="copyright">
        <p className="copyright__text">© 2025 Built On Love Foundation</p>
      </div>
      {isOpen && <Nominate isOpen={isOpen} onClose={handleDonateClick} />}
      {isDonateOnly && (
        <DonateOnly isOpen={isDonateOnly} onClose={handleDonateOnlyClick} />
      )}
    </>
  );
}

export default App;
