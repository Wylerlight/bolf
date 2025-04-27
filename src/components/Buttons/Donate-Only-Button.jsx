export default function DonateOnlyButton({ openDonateModal, styleIdentifier }) {
  return (
    <div className="navbar__selections" id={styleIdentifier}>
      <a
        onClick={(e) => {
          e.preventDefault();
          openDonateModal();
        }}
        className="donate__button"
      >
        Donate
      </a>
    </div>
  );
}
