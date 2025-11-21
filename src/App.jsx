import { useState, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { motion, useTransform, useScroll } from 'motion/react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import SponsorsMarquee from './Sponsors';
import MailChimp from './components/MailChimp/MailChimp';

import DonateLinks from './components/Donate-Popup/Donate-Popup';
import DonateOnly from './components/Donate-Popup/Donate-Only';
import DonateOnlyButton from './components/Buttons/Donate-Only-Button';
import Nominate from './components/Donate-Popup/Nominate';

import boardOfDirectorsPoster from './assets/BOLF Board New.jpg';

/* -------------------------------------------------------------------------- */
/*                             new scroll section                             */
/* -------------------------------------------------------------------------- */
import About from './components/About/About';

function App() {
  // const lenis = useLenis((lenis) => {
  //   console.log('Lenis instance:', lenis);
  // });

  const platinumSponsors = ['IEE', 'Modern Woodmen', 'Amlani Insurance Agency'];
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

  const scrollSectionRef = useRef(null);
  const scrollInnerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [500, -600]);

  return (
    <>
      <ReactLenis root />
      <Navbar
        handleDonateClick={handleDonateClick}
        handleDonateOnlyClick={handleDonateOnlyClick}
      />
      {/* <section id="page-top" className="navbar__line"></section> */}

      <section id="about" className="about">
        <div className="horizontal-scroll-wrapper" ref={scrollSectionRef}>
          <div className="horizontal-scroll-inner" ref={scrollInnerRef}>
            <motion.div className="horizontal-scroll-overflow" style={{ x }}>
              <div className="horizontal-card">
                <h1 className="card-title">
                  WELCOME TO THE BUILT ON LOVE FOUNDATION
                </h1>
                <p className="card-text">
                  The BUILT ON LOVE FOUNDATION is dedicated to uplifting
                  underprivileged individuals and families in the Inland Empire,
                  with a direct focus on the Yucaipa to Banning Pass area.
                  Through our efforts, we aim to bridge the gap for those
                  struggling to make ends meet, ensuring that no family goes
                  without essential support during critical times of the year
                </p>
              </div>
              <div className="horizontal-card">
                <h1 className="card-title">JAMES 1:22</h1>
                <p className="card-text">
                  "But be doers of the word, and not hearers only, deceiving
                  yourselves"
                </p>
              </div>
              <div className="horizontal-card">
                <h1 className="card-title">CORE VALUES ✝</h1>
                <p className="card-text">
                  Belief in God Support in Community Care for Orphans & Widows
                  Education for All
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          // className="about__container"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about__title">
            <h1>BUILT ON LOVE FOUNDATION</h1>
          </div>
        </motion.div>
        <motion.div
          // className="about__container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about__title">
            <h1>BUILT ON LOVE FOUNDATION</h1>
          </div>
        </motion.div>
        <motion.div
          // className="about__container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about__title">
            <h1>BUILT ON LOVE FOUNDATION</h1>
          </div>
        </motion.div>
      </section>
      <main className="main">
        <Events />

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
          </div>
          <div className="welcome__about-extra">
            <p className="a">
              <span className="a__span">WHO WE ARE:</span>
              <br />
              We are doers of the WORD
            </p>
            <p className="b">
              We love to give back to our community through combined efforts. We
              support local children through community events such as the{' '}
              <span style={{ color: '#FF5733' }}>Easter Drive</span> and give
              away event,{' '}
              <span style={{ color: '#FF5733' }}>Thanksgiving Food Drive</span>,
              and <span style={{ color: '#FF5733' }}>Back To School Drive</span>
              . Our hearts are firmly planted in caring for those who need it at
              the time they need it.
            </p>
            <p className="c">
              <span className="a__span">WHAT WE DO:</span>
              <br />
              We help as many people as we can and we have fun doing it!
            </p>
          </div>
        </section>

        <section className="sponsors">
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
              Kevin Cisneros - Inland Empire Escrow
            </p>
            <p className="board__names-list">
              Melissa Chagolla - Sierra Crest Mortgage
            </p>
          </div>
        </section>
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
