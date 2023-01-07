import "../../styles/links.css";

export default function Links() {
  return (
    <div className="links">
      <div className="links-wrapper">
        <div className="links-list">
          <div className="links-list-item">
            <a href="/" className="links-list-item-link">
              Home
            </a>
          </div>
          <div className="links-list-item">
            <a href="/services" className="links-list-item-link">
              Services
            </a>
          </div>
          <div className="links-list-item">
            <a href="/contact" className="links-list-item-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
