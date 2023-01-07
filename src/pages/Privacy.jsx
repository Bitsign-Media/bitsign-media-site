import Policies from "../components/PageElements/PrivacyPolicy/Policies";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy-wrapper">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="text">
          At Bitsign Media, we are committed to protecting the privacy of our
          users. This privacy policy ("Policy") explains how we collect, use,
          and share information about you when you use our website and other
          online products and services (collectively, the "Services") or
          interact with us.
        </p>
        <p className="text">
          By using our Services, you agree to the collection, use, and sharing
          of your information as described in this Policy. If you do not agree
          with our policies and practices, do not use our Services.
        </p>
        <Policies />
      </div>
    </div>
  );
}
