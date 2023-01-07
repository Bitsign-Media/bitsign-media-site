import FAQItems from "../components/PageElements/FAQ/FAQItems";
import "../styles/faq.css";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="faq-wrapper">
        <h1 className="page-title">Frequently Asked Questions (FAQ)</h1>
        <FAQItems />
      </div>
    </div>
  );
}
