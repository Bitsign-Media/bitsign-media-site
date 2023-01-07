import Socials from "./Socials";
import SupportList from "./SupportList";
import ReachOut from "./ReachOut";
import { copyright } from "../../data/copyright_data.js";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <Socials />
        {copyright.map((item) => {
          return (
            <div className="footer-copyright">
              <p class="copyright">
                {item.title} &copy; {item.year} {item.company}
              </p>
            </div>
          );
        })}
        <div className="footer-container-body">
          <SupportList />
          <ReachOut />
        </div>
      </div>
    </div>
  );
}
