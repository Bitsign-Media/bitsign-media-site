import TermsItems from "../components/PageElements/TermsAndConditions/TermItems";
import "../styles/terms.css";

export default function Terms() {
  return (
    <div className="terms">
      <div className="terms-wrapper">
        <h1 className="page-title">Terms & Conditions</h1>
        <TermsItems />
      </div>
    </div>
  );
}
