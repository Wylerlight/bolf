import React, { useState, useEffect, useRef } from 'react';
import './MailChimp.css';

export default function MailChimp() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const contentRef = useRef(null);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  // Reset form when modal closes
  const handleCloseModal = () => {
    setShowForm(false);
    setEmail('');
    setIsEmailValid(false);
  };

  // Handle scroll indicators based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const element = contentRef.current;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrolledToTop = scrollTop === 0;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 1;
      const hasScrollableContent = scrollHeight > clientHeight;

      // Remove existing classes
      element.classList.remove('scrollable-up', 'scrollable-down');

      if (hasScrollableContent) {
        // Show down arrow if not at bottom
        if (!isScrolledToBottom) {
          element.classList.add('scrollable-down');
        }
        // Show up arrow if not at top
        if (!isScrolledToTop) {
          element.classList.add('scrollable-up');
        }
      }
    };

    if (showForm && contentRef.current) {
      const element = contentRef.current;
      element.addEventListener('scroll', handleScroll);
      // Check initial state
      setTimeout(handleScroll, 100);

      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [showForm]);

  return (
    <>
      <button onClick={() => setShowForm(true)} className="contact-btn">
        Contact Us
      </button>{' '}
      {showForm && (
        <div className="mailchimp-modal" onClick={handleCloseModal}>
          <div
            className="mailchimp-content"
            ref={contentRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleCloseModal} className="close-btn"></button>

            <form
              action="https://gmail.us8.list-manage.com/subscribe/post?u=3fc2797fcfb030a99b586b908&amp;id=f8b323938d&amp;f_id=00ed9be0f0"
              method="post"
              target="_blank"
              noValidate
              className="mailchimp-form"
            >
              <h2 className="form-title">Contact Us</h2>{' '}
              <div className="form-group">
                <label htmlFor="mce-EMAIL" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className={`form-input ${
                    isEmailValid ? 'valid' : email ? 'invalid' : ''
                  }`}
                  placeholder="Enter your email address"
                />
                {email && !isEmailValid && (
                  <span className="error-message">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="mce-FNAME" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mce-LNAME" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mce-PHONE" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="PHONE"
                  id="mce-PHONE"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mce-COMPANY" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  name="COMPANY"
                  id="mce-COMPANY"
                  className="form-input"
                />
              </div>
              {/* Honeypot */}
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_3fc2797fcfb030a99b586b908_f8b323938d"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>{' '}
              <div className="form-actions">
                <input
                  type="submit"
                  value="Subscribe"
                  className={`submit-btn ${!isEmailValid ? 'disabled' : ''}`}
                  disabled={!isEmailValid}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
