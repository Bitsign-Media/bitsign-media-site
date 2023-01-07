import ContactItems from "../components/PageElements/Contact/ContactItems";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-head">
          <h1>Contact Us</h1>
          <p>Any questions or concerns? Please write us a message!</p>
        </div>
        <ContactItems />
      </div>
    </div>
  );
}
