export default function Nominate({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="donate__overlay" onClick={onClose}>
      <div className="donate__content" onClick={(e) => e.stopPropagation()}>
        <h2>Nominate someone in need</h2>
        <p>Donate directly to our cause:</p>
        <ul className="donation__links">
          <li>
            <a
              href="https://forms.gle/6Ntr7xUXgDLYrRWG9"
              className="donation__links-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nominate Here
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
