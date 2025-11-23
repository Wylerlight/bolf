import './Donate-Popup.css';

export default function Nominate({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="donate__overlay" onClick={onClose}>
      <div className="donate__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close__button"
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        <h2>❤️ Nominate Someone in Need</h2>
        <p>
          Know a family that could use our support? Help us connect with those
          who need it most in our community.
        </p>
        <ul className="donation__links">
          <li>
            <div className="donation__card nominate__card">
              <a
                href="https://forms.gle/6Ntr7xUXgDLYrRWG9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">📝</span>
                Submit Nomination
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
