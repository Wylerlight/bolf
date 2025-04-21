import React, { useState } from 'react';
import './Navbar.css';
import orgLogo from '../../assets/image4.png';

import DonateLinks from '../Donate-Popup/Donate-Popup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateClick = () => {
    setIsOpen(!isOpen);
  };

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
      <ul className="navbar__list">
        <li className="navbar__selections">
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
        <li className="navbar__selections">
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
        <li className="navbar__selections">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown('menu3');
            }}
          >
            Events
          </a>
          {dropdownOpen === 'menu3' && (
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
          )}
        </li>
        <li className="navbar__selections">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact Us
          </a>
        </li>
        <li className="navbar__selections-donate">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleDonateClick();
            }}
            className="donate__button"
          >
            Donate
          </a>
        </li>
      </ul>
      {isOpen && <DonateLinks isOpen={isOpen} onClose={handleDonateClick} />}
    </nav>
  );
}
