import "./SignUp.css";

export default function SignUp({
  buttonText,
  redirect,
  buttonRedirectText,
  onClose,
  children,
  isOpen,
}) {
  return (
    <div className="signup">
      <button className="signup__exit" type="button" onClick={onClose}>
        X
      </button>
      <h2 className="sigup__title">SIGN UP HERE</h2>
      <form action="submit" className="signup__form">
        <fieldset className="signup__fieldset">{children} </fieldset>
        <span className="signup__error"></span>
        <button type="submit" className="signup__submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
