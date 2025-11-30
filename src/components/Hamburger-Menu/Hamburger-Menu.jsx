import React, { useState, useEffect } from 'react';
import './Hamburger-Menu.css';

export default function HamburgerMenu({
  handleDonateClick,
  handleDonateOnlyClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when pressing Escape
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setDropdownOpen(null);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu after navigation
    setIsOpen(false);
    setDropdownOpen(null);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setDropdownOpen(null);
  }

  return (
    <>
      {/* Hamburger Icon Button */}
      <button
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        ☰
      </button>

      {/* Full Screen Overlay - Only render when open */}
      {isOpen && (
        <div
          className="hamburger-overlay"
          onClick={(e) => {
            // Close if clicking directly on overlay (not on menu content)
            if (e.target === e.currentTarget) {
              setIsOpen(false);
              setDropdownOpen(null);
            }
          }}
        >
          {/* Close Button */}
          <button
            className="hamburger-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Menu Content */}
          <div className="hamburger-menu-content">
            <ul className="hamburger-menu-list">
              <li>
                <button
                  onClick={() => scrollToTop()}
                  className="hamburger-menu-item"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hamburger-menu-item"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => toggleDropdown('events')}
                  className="hamburger-menu-item"
                >
                  Events {dropdownOpen === 'events' ? '▲' : '▼'}
                </button>
                {dropdownOpen === 'events' && (
                  <ul className="hamburger-dropdown">
                    <li>
                      <button
                        onClick={() => scrollToSection('upcoming-events')}
                        className="hamburger-dropdown-item"
                      >
                        Upcoming Events
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('past-events')}
                        className="hamburger-dropdown-item"
                      >
                        Past Events
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hamburger-menu-item"
                >
                  Contact
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    handleDonateClick();
                    setIsOpen(false);
                  }}
                  className="hamburger-menu-item hamburger-nominate-btn"
                >
                  Nominate
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    handleDonateOnlyClick();
                    setIsOpen(false);
                  }}
                  className="hamburger-menu-item hamburger-donate-btn"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
