import React, { useState, useEffect } from 'react';
import './Navbar.css';
import orgLogo from '../../assets/image4.png';

export default function Navbar({ handleDonateClick, handleDonateOnlyClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      const eventsButton = event.target.closest('[data-dropdown="menu3"]');
      const dropdown = event.target.closest('.navbar__events-dropdown');

      if (!eventsButton && !dropdown && dropdownOpen === 'menu3') {
        setDropdownOpen(null);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <nav className="navbar">
      <div
        className="navbar__logo"
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={orgLogo}
          alt="Organization Logo"
          className="organization__logo"
        />
      </div>

      <ul className="navbar__list">
        <li className="button-29">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </button>
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
        </li>{' '}
        <li className="button-29" data-dropdown="menu3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('events');
              toggleDropdown('menu3');
            }}
          >
            Events
          </a>
          {dropdownOpen === 'menu3' && (
            <div className="navbar__events-dropdown show">
              <a
                href=""
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
        </li>{' '}
        <li className="button-29" id="nominate__button">
          <a
            href="#"
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
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleDonateOnlyClick();
            }}
            className="donate__button"
          >
            Donate
          </a>{' '}
        </li>
      </ul>
    </nav>
  );
}
