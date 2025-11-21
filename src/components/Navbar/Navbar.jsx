import React, { useState } from 'react';
import './Navbar.css';
import HamburgerMenu from '../Hamburger-Menu/Hamburger-Menu';

import orgLogo from '../../assets/image4.png';

export default function Navbar({ handleDonateClick, handleDonateOnlyClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src={orgLogo}
          alt="Organization Logo"
          className="organization__logo"
        />
      </div>
      <HamburgerMenu
        handleDonateClick={handleDonateClick}
        handleDonateOnlyClick={handleDonateOnlyClick}
      />
      <ul className="navbar__list">
        <li className="button-29">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('page-top');
            }}
          >
            Home
          </a>
        </li>
        <li className="button-29">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
        </li>
        <li className="button-29">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('upcoming-events');
              // toggleDropdown('menu3');
            }}
          >
            Events
          </a>
          {/* {dropdownOpen === 'menu3' && (
            <div className="navbar__events-dropdown">
              <a
                href=""
                className="events__dropdown-list"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('upcoming-events');
                  setDropdownOpen(null);
                }}
              >
                Upcoming Events
              </a>
              <a
                href=""
                className="events__dropdown-list"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('past-events');
                  setDropdownOpen(null);
                }}
              >
                Past Events
              </a>
            </div>
          )} */}
        </li>
        <li className="button-29">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </li>
        <li className="button-29" id="nominate__button">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleDonateClick();
            }}
          >
            Nominate
          </a>
        </li>
        <li className="button-29" id="donate__button">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleDonateOnlyClick();
            }}
            className="donate__button"
          >
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}
