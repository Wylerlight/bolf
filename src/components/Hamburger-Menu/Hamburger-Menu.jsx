import React, { useState } from 'react';

export default function HamburgerMenu({
  handleDonateClick,
  handleDonateOnlyClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="hamburger-menu">
      <button
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`hamburger__menu-open ${isOpen ? 'show' : ''}`}>
        <div className="hamburger__close" onClick={() => setIsOpen(false)}>
          &times;
        </div>
        <ul className="hamburger__list">
          <li className="hamburger__selections">
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
          <li className="hamburger__selections">
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
          <li className="hamburger__selections">
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
              <div className="hamburger__dropdown">
                <a
                  href=""
                  className=""
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
                  className="hamburger__dropdown"
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
          <li className="hamburger__selections" id="">
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
          <li className="hamburger__selections" id="donate">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleDonateClick();
                setIsOpen(false);
              }}
            >
              Nominate
            </a>
          </li>
          <li className="hamburger__selections" id="donate">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleDonateOnlyClick();
                setIsOpen(false);
              }}
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
