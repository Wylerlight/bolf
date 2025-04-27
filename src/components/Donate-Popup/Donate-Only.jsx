export default function DonateOnly({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="donate__overlay" onClick={onClose}>
      <div className="donate__content" onClick={(e) => e.stopPropagation()}>
        <h2>Support Our Mission</h2>
        <p>Donate directly to our cause:</p>
        <ul className="donation__links">
          <li>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=NRRXHBMX84B4U"
              className="donation__links-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Here
            </a>
          </li>
        </ul>
        <button className="close__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
