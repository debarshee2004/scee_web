import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left-section">
        <button className="left-buttons">Home</button>
        <button className="left-buttons">Team</button>
        <button className="left-buttons">Faculty</button>
        <button className="left-buttons">Events</button>
      </div>
      <div className="center-section">
        <h1>IEI SCEE AOT</h1>
      </div>
      <div className="right-section">
        <button className="right-buttons">
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button className="right-buttons">
          <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button className="right-buttons">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button className="right-buttons">
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
