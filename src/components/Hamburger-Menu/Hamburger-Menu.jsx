import React, { useState, useRef, useEffect } from 'react';

export default function HamburgerMenu({
  handleDonateClick,
  handleDonateOnlyClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const scrollPositionRef = useRef(0); // Store scroll position

  const [dropdownOpen, setDropdownOpen] = useState(null);
  // Focus management - focus close button when menu opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]); // Prevent body scroll when menu is open - Enhanced to preserve scroll position
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      scrollPositionRef.current =
        window.pageYOffset || document.documentElement.scrollTop;

      // Apply scroll lock without position fixed to prevent jumping
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevent mobile scrolling
      document.documentElement.style.overflow = 'hidden'; // Also lock html element
    } else {
      // Restore scroll lock and position
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';

      // Restore scroll position smoothly
      if (scrollPositionRef.current > 0) {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant', // Instant to prevent any jumping
        });
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Enhanced touch event handling for better mobile experience
  useEffect(() => {
    function handleTouchStart(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        event.preventDefault();
      }
    }

    function handleTouchMove(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        event.preventDefault();
      }
    }

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);
  // Close menu when clicking outside or pressing Escape - Enhanced for backdrop
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click is on the backdrop (outside the menu content but inside the overlay)
      if (isOpen) {
        const menuOverlay = document.querySelector('.hamburger__menu-open');
        const menuContent = document.querySelector('.hamburger__list');
        const closeButton = document.querySelector('.hamburger__close');

        // If clicking on the overlay but not on menu content or close button
        if (
          menuOverlay &&
          menuOverlay.contains(event.target) &&
          !menuContent?.contains(event.target) &&
          !closeButton?.contains(event.target)
        ) {
          setIsOpen(false);
          setDropdownOpen(null);
          return;
        }

        // Original click outside logic
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
          setDropdownOpen(null);
        }
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
      // Also listen for clicks on the menu overlay itself
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleClickOutside);
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      </button>{' '}
      <div
        className={`hamburger__menu-open ${isOpen ? 'show' : ''}`}
        id="hamburger-menu"
        role="navigation"
        aria-label="Mobile navigation menu"
        onClick={(e) => {
          // Close menu when clicking on backdrop (outside menu content)
          if (e.target === e.currentTarget) {
            setIsOpen(false);
            setDropdownOpen(null);
          }
        }}
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
          {' '}
          <li className="hamburger__selections" role="listitem">
            {' '}
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              role="button"
              tabIndex={0}
            >
              Home
            </button>
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
          </li>{' '}
          <li className="hamburger__selections" id="donate" role="listitem">
            <a
              href="#"
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
              href="#"
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
