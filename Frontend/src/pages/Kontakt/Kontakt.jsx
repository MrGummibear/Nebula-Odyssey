import { Link } from "react-router-dom";

const Kontakt = () => {
  return (
    <>
      <h1>Kontaktieren Sie uns...</h1>
      <form>
        <div>
          <label htmlFor="name">Vollständiger Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Ihre E-Mail-Adresse</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="name">Ihre Nachricht </label>
          <textarea name="message" id="message"></textarea>
        </div>
        <input type="submit" value="Nachricht abschicken" />
      </form>
      <Link to={"/"}>Gehen Sie zurück auf die Startseite</Link>
    </>
  );
};

export default Kontakt;
