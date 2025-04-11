import { useState, useEffect } from "react";

import "./App.css";
import SignUp from "./components/SignUp";
import SponsorsMarquee from "./Sponsors";

import orgLogo from "./assets/image4.png";
import phoneIcon from "./assets/phone-svgrepo-com.svg";
import emailIcon from "./assets/mail-svgrepo-com.svg";
import locationIcon from "./assets/pin-fill-sharp-circle-634-svgrepo-com.svg";
import sponsorshipPoster from "./assets/golf-tourny2.JPG";
import tournamentPoster from "./assets/Golf-Tourny1.JPG";
import sponsorshipInfoPoster from "./assets/golf-sponsor1.JPG";
import sponsorshipForm from "./assets/golf-sponsor2.JPG";
import boardOfDirectorsPoster from "./assets/BOLF Board.JPG";

function App() {
  const platinumSponsors = ["IEE", "Modern Woodmen", "Amlani Insurance Agency"];
  const goldSponsors = ["Prospect", "Fidelity", "Craignsons", "Paulson"];

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            src={orgLogo}
            alt="Organization Logo"
            className="organization__logo"
          />
        </div>
        <ul className="navbar__list">
          <li className="navbar__selections">
            <a href="#page-top">Home</a>
          </li>
          <li className="navbar__selections">
            <a href="#about">About</a>
          </li>
          <li
            className="navbar__selections"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("menu3");
            }}
          >
            <a href="">Events</a>
            {dropdownOpen === "menu3" && (
              <div className="navbar__events-dropdown">
                <a href="upcoming-events" className="events__dropdown-list">
                  Upcoming Events
                </a>
                <a href="past-events" className="events__dropdown-list">
                  Past Events
                </a>
              </div>
            )}
          </li>
          <li className="navbar__selections">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="navbar__selections">
            <a id="donate">Donate</a>
          </li>
        </ul>
      </nav>
      <section id="page-top" className="navbar__line"></section>
      <section className="events" id="upcoming-events">
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
        {/* <button className="events__button">SIGN UP HERE</button> */}
      </section>
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
        </section>
        <section id="about" className="about">
          WHO WE ARE: WE ARE DOERS OF THE WORD We are doers of the WORD. We love
          to give back to our community through combined efforts. We support
          local children through community events such as the Easter Drive and
          give away event, Thanksgiving Food Drive, and Back To School Drive.
          Our hearts are firmly planted in caring for those who need it at the
          time they need it. If you'd like to learn more or help volunteer,
          contact us direct. WHAT WE DO: We help as many people as we can and we
          have fun doing it!
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
      <footer className="footer" id="contact">
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
        <a className="footer__text">
          Built On Love Foundation is a registered 501(c)(3) nonprofit
          organization (EIN: 92-2483917). Donations are tax-deductible to the
          fullest extent allowed by law.
        </a>
      </footer>
      <div className="copyright">
        <p className="copyright__text">© 2025 Built On Love Foundation</p>
      </div>
      {/* <SignUp
        buttonText="Submit"
        redirect=""
        buttonRedirectText=""
        onClose=""
      /> */}
    </>
  );
}

export default App;
