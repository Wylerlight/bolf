import React, { useState } from 'react';
import './MailChimp.css';

export default function MailChimp() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button onClick={() => setShowForm(true)} className="contact-btn">
        Contact Us
      </button>

      {showForm && (
        <div className="mailchimp-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-backdrop" onClick={() => setShowForm(false)} />
          <div className="mailchimp-content">
            <button onClick={() => setShowForm(false)} className="close-btn">
              X
            </button>

            <form
              action="https://gmail.us8.list-manage.com/subscribe/post?u=3fc2797fcfb030a99b586b908&amp;id=f8b323938d&amp;f_id=00ed9be0f0"
              method="post"
              target="_blank"
              noValidate
              className="mailchimp-form"
            >
              <h2 className="form-title">Contact Us</h2>

              <div className="form-group">
                <label htmlFor="mce-EMAIL" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="form-input"
                />
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
              </div>

              <div className="form-actions">
                <input type="submit" value="Subscribe" className="submit-btn" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
