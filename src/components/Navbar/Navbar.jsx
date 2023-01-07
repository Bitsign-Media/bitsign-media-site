import Links from "./Links";
import { companyInfo } from "../../data/company_data";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-body">
          <div className="navbar-body-logo">
            <img src={companyInfo[0].logo} alt="" className="company-logo" />
          </div>
          {companyInfo.map((data) => {
            return (
              <div className="navbar-body-content">
                <h2 className="company-name">{data.name}</h2>
                <p className="company-slogan">{data.slogan}</p>
              </div>
            );
          })}
        </div>
        <div className="navbar-links">
          <div className="links-component">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
