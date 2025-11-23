import './Donate-Popup.css';

export default function DonateOnly({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="donate__overlay" onClick={onClose}>
      <div className="donate__content" onClick={(e) => e.stopPropagation()}>
        {' '}
        <button
          className="close__button"
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        <h2>
          <span className="heart-icon">❤</span> Support Our Mission
        </h2>
        <p>
          Your generous donation helps us uplift families in need throughout the
          Inland Empire community.
        </p>
        <ul className="donation__links">
          <li>
            <div className="donation__card">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=NRRXHBMX84B4U"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">💳</span>
                Donate Now
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
