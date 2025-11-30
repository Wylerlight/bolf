export default function DonateOnlyButton({ openDonateModal, styleIdentifier }) {
  return (
    <div className="donate-button-container" id={styleIdentifier}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openDonateModal();
        }}
      >
        Donate
      </a>
    </div>
  );
}
