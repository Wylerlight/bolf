import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp';
import SponsorsMarquee from './Sponsors';

import boardOfDirectorsPoster from './assets/BOLF Board.jpg';

function App() {
  const platinumSponsors = ['IEE', 'Modern Woodmen', 'Amlani Insurance Agency'];
  const goldSponsors = ['Prospect', 'Fidelity', 'Craignsons', 'Paulson'];

  return (
    <>
      <Navbar />
      <section id="page-top" className="navbar__line"></section>

      <main className="main">
        <section className="youtube">
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
        </section>

        <section className="welcome">
          <p className="welcome__text">WELCOME TO BUILT ON LOVE FOUNDATION!</p>
          <p className="welcome__text">JAMES 1:22</p>
          <p className="welcome__text">
            "But be doers of the word, and not hearers only, deceiving
            yourselves"
          </p>
          <p className="welcome__text">
            CORE VALUES Belief in God Support in Community Care for Orphans &
            Widows Education for All
          </p>
          <p className="welcome__text">
            Mission Statement The Built On Love Foundation is dedicated to
            uplifting underprivileged individuals and families in the Inland
            Empire, with a direct focus on the Yucaipa to Banning Pass area.
            Through our efforts, we aim to bridge the gap for those struggling
            to make ends meet, ensuring that no family goes without essential
            support during critical times of the year.
          </p>
        </section>
        <section id="about" className="about">
          WHO WE ARE: WE ARE DOERS OF THE WORD We are doers of the WORD. We love
          to give back to our community through combined efforts. We support
          local children through community events such as the Easter Drive and
          give away event, Thanksgiving Food Drive, and Back To School Drive.
          Our hearts are firmly planted in caring for those who need it at the
          time they need it.
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

            <ul className="board__directors-list">
              <li className="board__names-list">
                Danielle Soto-Marrufo - C&D Real Estate
              </li>
              <li className="board__names-list">
                Cesar Marrufo - C&D Real Estate
              </li>
              <li className="board__names-list">
                Joe Amlani - Amlani Insurance Agency
              </li>
              <li className="board__names-list">
                Kevin Cisneroz - Inland Empire Escrow
              </li>
              <li className="board__names-list">
                Steven Burns - Cross Country Mortgage
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Events />
      <Footer />
      <div className="copyright">
        <p className="copyright__text">© 2025 Built On Love Foundation</p>
      </div>
      <SignUp
        buttonText="Submit"
        redirect=""
        buttonRedirectText=""
        onClose=""
      />
    </>
  );
}

export default App;
