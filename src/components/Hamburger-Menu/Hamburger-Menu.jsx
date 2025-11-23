import React, { useState, useRef, useEffect } from 'react';

export default function HamburgerMenu({
  handleDonateClick,
  handleDonateOnlyClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(null);
  // Focus management - focus close button when menu opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdownOpen(null);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setDropdownOpen(null);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
  return (
    <div className="hamburger-menu" ref={menuRef}>
      {' '}
      <button
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="hamburger-menu"
      >
        ☰
      </button>
      <div
        className={`hamburger__menu-open ${isOpen ? 'show' : ''}`}
        id="hamburger-menu"
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        {' '}
        <button
          className="hamburger__close"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          type="button"
          ref={closeButtonRef}
        >
          &times;
        </button>{' '}
        <ul className="hamburger__list" role="list">
          <li className="hamburger__selections" role="listitem">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('page-top');
              }}
              role="button"
              tabIndex={0}
            >
              Home
            </a>
          </li>
          <li className="hamburger__selections" role="listitem">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              role="button"
              tabIndex={0}
            >
              About
            </a>
          </li>
          <li className="hamburger__selections" role="listitem">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('menu3');
              }}
              role="button"
              tabIndex={0}
              aria-expanded={dropdownOpen === 'menu3'}
              aria-controls="events-dropdown"
            >
              Events
            </a>
            {dropdownOpen === 'menu3' && (
              <div
                className="hamburger__dropdown"
                id="events-dropdown"
                role="region"
              >
                <a
                  href=""
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('upcoming-events');
                    setDropdownOpen(null);
                  }}
                  role="button"
                  tabIndex={0}
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
                  role="button"
                  tabIndex={0}
                >
                  Past Events
                </a>
              </div>
            )}
          </li>
          <li className="hamburger__selections" role="listitem">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              role="button"
              tabIndex={0}
            >
              Contact
            </a>
          </li>
          <li className="hamburger__selections" id="donate" role="listitem">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleDonateClick();
                setIsOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              Nominate
            </a>
          </li>
          <li className="hamburger__selections" id="donate" role="listitem">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleDonateOnlyClick();
                setIsOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
